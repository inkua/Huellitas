import Image from "next/image";
import Accord from "../Accordion/Accordion";

let items = [
  {
    id: 1,
    title: "¿Cuál es la edad mínima para ser voluntario?",
    par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    title: "¿Necesito alguna formación o experiencia previa?",
    par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "¿Qué actividades puedo realizar como voluntario?",
    par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    title: "¿Cuál es la diferencia entre padrino y voluntario?",
    par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function FAQ_Colaboracion() {
  return (
    <div className=" w-full mx-auto font-[Poppins]">
      <div className="w-full max-w-screen-2xl mx-auto h-full">
        <div className="w-[90%] lg:w-9/12 m-auto">
          <div className="text-left my-4 mt-6">
            <h2 className="text-lg text-primaryFont py-2">Colaboración</h2>
            <h1 className="text-lg lg:text-3xl font-semibold text-primaryFont">
              PREGUNTAS FRECUENTES
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row items-start">
            <div className="mb-4 lg:mb-0 lg:mr-4 w-full lg:w-1/2 lg:hidden">
              <Image
                src={
                  "https://res.cloudinary.com/dorljfo6v/image/upload/v1718047151/huellitas/tutambienpuedesayudar-mobile_nlembr.png"
                }
                width={700}
                height={700}
                alt="Petting Dog Mobile"
                className="rounded-lg w-full object-cover"
              />
            </div>

            <div className="w-full h-full flex flex-col m-auto">
              <Accord items={items} />
            </div>

            <Image
              src={
                "https://res.cloudinary.com/dorljfo6v/image/upload/v1718046812/huellitas/home-tutambienpuedesayudar-desktop.png"
              }
              width={700}
              height={700}
              className="rounded-xl lg:w-5/12 hidden lg:block lg:ml-7 object-cover"
              alt="Petting Dog Desktop"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ_Colaboracion;
