import { Link } from "react-scroll";
import { menuitem } from "../../layout/Container/Context/Context";
import Container from "../../layout/Container/Container";
const Footer = () => {
  return (
    <Container>
      <div className="border-b-2 border-[#ccc] pb-4 mb-5">
        <ul className="flex mx-auto gap-4 w-[330px] sm:w-[450px] sm:gap-10  ">
          {menuitem.map((menu) => {
            return (
              <li className=" text-xl sm:text-2xl font-poppins cursor-pointer dark:text-[#fff]">
                <Link smooth={true} duration={600} to={menu.title}>
                  {menu.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="text-center text-[20px] mb-3 dark:text-[#ceecec] font-roboto">
        Umar Tolibov 2024
      </p>
    </Container>
  );
};

export default Footer;
