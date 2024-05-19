import React from "react";
import Container from "../../layout/Container/Container";
import { experenceProgramLang } from "../../layout/Container/Context/Context";
import { experenceLibery } from "../../layout/Container/Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Element } from "react-scroll";

const Experense = () => {
  return (
    <Container>
      <Element name="Tajriba">
        <div className="mt-10">
          <p className="text-center font-inter text-2xl tracking-wide text-[#555e] font-medium dark:text-[#ccc]">
            Mening
          </p>
          <h1 className="text-center font-inter font-semibold text-[35px] tracking-widest dark:text-[#fff]">
            Tajribam
          </h1>

          <div className="mt-16 ms:flex ss:gap-5 md:gap-10" id="home">
            <div className=" mx-auto w-[95%] ms:w-[600px] h-[250px] border-2 border-[#555] rounded-2xl p-[1rem] grid grid-cols-2 pr-5 ms:ml-3  dark:border-[#fff]">
              {experenceProgramLang.map((item, i) => {
                return (
                  <div className="flex items-center justify-center " key={i}>
                    <FontAwesomeIcon icon={faCircleCheck} size="2x" className="dark:text-[#fff]"/>
                    <div className="ml-3">
                      <h1 className="font-inter font-bold dark:text-[#fff]">{item.name}</h1>
                      <p className="font-poppins dark:text-[#fff]">{item.experence}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=" mt-5 ms:mt-0 mx-auto w-[95%] ms:w-[600px] h-[250px] border-2 border-[#555] rounded-2xl p-[1.5rem] grid grid-cols-2 pr-5 ms:mr-3  dark:border-[#fff]">
              {experenceLibery.map((item, i) => {
                return (
                  <div className="flex items-center justify-center  ">
                    <FontAwesomeIcon icon={faCircleCheck} size="2x" className="dark:text-[#fff]"/>
                    <div className="ml-3">
                      <h1 className="font-inter font-bold dark:text-[#fff]">{item.libery}</h1>
                      <p className="font-poppins dark:text-[#fff]">{item.experence}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Element>
    </Container>
  );
};

export default Experense;
