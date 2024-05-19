import Container from "../../layout/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVoicemail, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Element } from "react-scroll";
const Contact = () => {
  return (
    <Element name="Aloqa">
      <Container>
        <p className="text-center font-poppins mt-20 text-3xl tracking-wide text-[#555e] dark:text-[#ccc]">
          Men Bilan
        </p>
        <p className="text-center font-roboto mt-1 text-4xl tracking-widest dark:text-[#fff] ">
          Bog'lanish
        </p>
        <div className="mt-14 flex mb-20 flex-col-reverse sm:flex-row  ">
          <div className="mx-auto p-5 h-[100px] border-2 border-[#000] rounded-xl  gap-3 justify-center items-center dark:border-white dark:text-[#fff] sm:h-[90px] sm:w-[500px] sm:flex">
            <div>
              <a
                className="text-[17px] font-poppins tracking-wider flex items-center justify-center"
                href="mailto:umartolibov700@gmail.com"
              >
                <FontAwesomeIcon icon={faVoicemail} className="mr-2 " />
                umartolibov700@gmail.com
              </a>
            </div>
            <div>
              <a
                href={"tel:+998915567733"}
                className=" mt-4  text-[17px] font-poppins tracking-wider flex items-center justify-center sm:mt-0"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-1" />
                +998915567733
              </a>
            </div>
          </div>
        </div>
        <div className=" mx-auto w-full sm:w-[50%]  px-10 ms:pl-14"></div>
      </Container>
    </Element>
  );
};

export default Contact;
