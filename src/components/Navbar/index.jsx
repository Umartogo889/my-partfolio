import React, { useEffect, useState } from "react";
import { menuitem } from "../../layout/Container/Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
// images
import Sun from "../../images/light-mode-svgrepo-com.svg";
const Navbar = () => {
  const [count, SetCount] = useState(false);
  const [theme, SetTheme] = useState(localStorage.getItem("theme"));
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
    if (theme === "moon" || !darkQuery.matches) {
      localStorage.setItem("theme", "moon");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className="flex justify-center w-[100%] top-0 bg-[#e9e9e9] h-10 z-[999] fixed py-10 px-5 lg:px-1 dark:bg-[#080606e9]
    "
    >
      <div className=" relative flex items-center  justify-between sm:items-center w-[100%] max-w-[1200px] ">
        <h1 className="text-3xl font-poppins font-medium text-[#161616] dark:text-[#dff5f3] ">
          Umar
        </h1>

        <ul
          className={`absolute -translate-y-full delay-700 mt-[177px] z-50 gap-5 -ml-6  sm:translate-y-0 ${
            count && "translate-y-0"
          } w-[115%]  justify-center transition flex-col sm:flex-row  items-center sm:w-auto sm:relative flex  sm:mt-0 sm:mr-9  mr-7 p-[20px]  sm:p-0 bg-[#ccc] sm:bg-transparent sm:bg-[#fff]  text-white sm:text-black`}
        >
          {menuitem.map((item) => {
            return (
              <li className="nav-list">
                <Link smooth={true} duration={700} to={item.title}>
                  {item.title}
                </Link>
              </li>
            );
          })}
          {count && (
            <FontAwesomeIcon
              className="absolute right-7 top-8 text-black "
              size="xl"
              icon={faXmark}
              onClick={() => SetCount(false)}
            />
          )}
        </ul>

        <FontAwesomeIcon
          className="absolute right-0 sm:hidden dark:text-[#fff]"
          icon={faBars}
          size="xl"
          onClick={() => SetCount(count ? false : true)}
        />
        {theme === "light" && (
          <FontAwesomeIcon
            icon={faMoon}
            size="xl"
            className="absolute right-12 sm:-right-2 cursor-pointer"
            onClick={() => SetTheme("moon")}
          />
        )}
        {theme === "moon" && (
          <img
            className="absolute right-12 sm:-right-2 cursor-pointer     "
            src={Sun}
            alt=""
            onClick={() => SetTheme("light")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
