import Container from "../../layout/Container/Container";
// images
import aftorImg from "../../images/main-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Element } from "react-scroll";
const About = () => {
  return (
    <Element name="Haqida">
      <Container>
        <h1 className="text-center font-semibold text-[43px] -mt-5 sm:mt-5 dark:text-[#fff]">
          Men Haqimda
        </h1>
        <p className="text-center mt-2 font-medium font-poppins text-2xl text-[#555e] -tracking-tighter dark:text-[#ccc] ">
          ko'proq bilib oling
        </p>
        <div className=" mt-0 md:mt-20 flex flex-col md:flex-row justify-center md:justify-between items-center">
          <img
            className="relative hidden md:block md:left-14 w-[200px] md:w-[350px]  rounded-2xl"
            src={aftorImg}
            alt=""
          />
          <div className="-left-5 mt-10 ml-10 w-[100%] sm:w-[80%] md:w-[55%] relative md:right-10">
            <div className="sm:flex justify-between">
              <div className="w-[90%]  mx-auto sm:w-[48%] border-2  h-36 flex flex-col justify-center items-center py-5 gap-1 rounded-2xl">
                <FontAwesomeIcon
                  icon={faMedal}
                  size="2xl"
                  className="dark:text-[#fff]"
                />
                <h3 className="font-poppins font-semibold dark:text-[#fff]">
                  Tajriba
                </h3>
                <p className="font-inter font-medium text-[#555] dark:text-[#ccc]">
                  1+ yil
                </p>
                <p className="font-inter font-medium text-[#555] dark:text-[#ccc]">
                  Frontend Dasturchi
                </p>
              </div>
              <div className="w-[90%] mt-5 sm:mt-0  mx-auto sm:w-[48%] h-36 flex flex-col justify-center items-center py-5 gap-1 border-2 rounded-2xl">
                <FontAwesomeIcon
                  icon={faUserGroup}
                  size="2xl"
                  className="dark:text-[#fff]"
                />
                <p className="font-poppins font-semibold  dark:text-[#fff]">
                  Ta'lim
                </p>
                <p className="font-inter font-medium text-[#555] dark:text-[#ccc]">
                  Samarqand Yoshlar Texno Parki
                </p>
              </div>
            </div>
            <p className="w-full font-poppins tracking-wider mb-0 mt-10 text-xl text-center dark:text-[#fff]">
              Men Umar Tolibov 2007-yil Navoiy viloyati Zarafshon shahrida
              tavallud topgaman. Xozirda Samarqand Shahrida istiqomt qilib
              kelyabman. dasturlashga kirib kelishimga 1+ yil bo'ldi.
            </p>
          </div>
        </div>
      </Container>
    </Element>
  );
};

export default About;
