import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AftorImg from "../../images/aftorImg.png";
import Container from "../../layout/Container/Container";
import { Link } from "react-scroll";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

const HeaderHero = () => {
  return (
    <Container>
      <div className="h-[680px] mt-16 flex-col sm:flex-row flex justify-around items-center">
        <div className="flex justify-center w-[320px] xs:w-[355px] sm:h-[350px] overflow-hidden bg-slate-900 rounded-[55%] dark:bg-[#e1dfdfec]">
          <img
            className=" w-[280px] -mb-11  xs:w-[290px] z-1 "
            src={AftorImg}
            alt="Aftor img"
          />
        </div>
        <div className="text-center -mt-[30px] sm:mt-0 xs:w-[300px]">
          <p className=" text-[#555] text-xl font-inter font-medium dark:text-[#c6cccc]">
            Salom, men
          </p>
          <h4 className="mt-1 mb-1 text-[26px] font-inter font-bold xs:text-[30px] xs:mb-2 dark:text-[#fff] ">
            Umar Tolibov
          </h4>
          <h2 className=" text-[#555] text-[28px] xs:text-3xl font-inter font-medium dark:text-[#c6cccc]">
            Frontend Dasturchi
          </h2>
          <div className="mt-5 flex justify-center gap-4 ">
            <a
              className="btn-hero  hover:text-white  hover:bg-slate-800 dark:hover:bg-[#ccc]  dark:hover:text-[#000]"
              href={
                "https://github.com/Umartogo889/resume/blob/main/Umar%20Tolibov%20Resume%20(1).pdf"
              }
            >
              CV yuklash
            </a>
            <Link
              smooth={true}
              duration={700}
              to="Aloqa"
              className="btn-hero text-white bg-slate-800 dark:bg-[#fff] hover:bg-black dark:text-[#000] dark:hover:bg-[#ccc]"
            >
              Bog'lanish
            </Link>
          </div>
          <div className="w-full flex gap-10  mt-7 dark:text-[#fff] justify-center items-center">
            <a href={"tel:+998915567733"} className="h-6 ">
              <FontAwesomeIcon icon={faPhone} size="lg" />
            </a>
            <a href="mailto:umartolibov700@gmail.com" className="h-6 ">
              <FontAwesomeIcon icon={faMailBulk} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeaderHero;
