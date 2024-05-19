import { Element } from "react-scroll";
import Container from "../../layout/Container/Container";
import { AboutProject } from "../../layout/Container/Context/Context";

const Projects = () => {
  return (
    <Element name="Loyhalar">
      <Container>
        <div className="mt-20">
          <p className="text-center text-2xl font-inter font-semibold tracking-widest text-[#555] dark:text-[#ccc]">
            Men Yaratgan
          </p>
          <h1 className="text-center font-bold text-3xl tracking-widest dark:text-[#fff]">
            Loyhalar
          </h1>
          <div className="flex items-center justify-center mt-10 ">
            <div className=" ss:grid ss:grid-cols-2 md:grid-cols-3 ss:gap-3 ms:gap-10">
              {AboutProject.map((card) => {
                return (
                  <div className=" mt-5 w-[300px] relative flex flex-col  justify-center items-center rounded-3xl border-2 border-gray-700 ss:mt-0 ss:w-[300px] xs:h-[450px]  h-[450px] p-5 ms:ml-1 ms:mr-1 dark:bg-[#fff] dark:border-none">
                    <img
                      className="rounded-lg absolute top-10 w-[90%]"
                      src={card.img}
                      alt=""
                    />
                    <div className="absolute bottom-7">
                      <h1 className="text-center font-poppins text-2xl mt-0 mb-6 font-medium">
                        {card.name}
                      </h1>
                      <div className="flex gap-3 justify-center items-center">
                        <a href={card.link} className="btn-project">
                          Jonli Ko'rish
                        </a>
                        <a href={card.linkgit} className="btn-project">
                          Git Hub
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Element>
  );
};

export default Projects;
