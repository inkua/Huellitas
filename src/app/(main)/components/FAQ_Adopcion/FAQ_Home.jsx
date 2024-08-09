import Image from "next/image";
import Accord from "../Accordion/Accordion";

let items = [
  {
    id: 1,
    title: "¿Qué hacemos?",
    par: "Rescatamos animales en condiciones vulnerables, los rehabilitamos y entregamos a hogares/familias seguros y responsables.",
  },
  {
    id: 2,
    title: "¿Cómo lo logramos?",
    par: "Con la disposición del equipo de Huellitas, amor y dedicación. Nuestro modelo de 6 pasos para un final feliz hace posible transformar la historia de los animales rescatados. Lo más importante para lograrlo son las donaciones y apoyo de nuestra familia Huellitas. Sin ellos nada de eso sería posible.",
  },
  {
    id: 3,
    title: "¿Cuáles son los 6 pasos?",
    par: <ol className="flex flex-col gap-2">
      <ul>
        <p><span className="font-bold">PASO 1 RESCATE:</span> Cuando nos alertan de algún peludo que necesita ayuda, acudimos a su rescate.</p>
      </ul>
      <ul>
        <p> <span className="font-bold">PASO 2 INGRESO A LA VETERINARIA:</span> Ingresamos al peludo en una de nuestras veterinarias de confianza para ser atendido.</p>
      </ul>
      <ul>
        <p><span className="font-bold">PASO 3 REHABILITACIÓN:</span> De acuerdo con las indicaciones del veterinario, comienza el tratamiento médico y la rehabilitación física y mental del peludo.</p>
      </ul>
      <ul>
        <p><span className="font-bold">PASO 4 ADOPCIÓN:</span> Difundimos imágenes e información del rescatado, a la espera de una familia interesada, la que deberá diligenciar un formulario, mantener una entrevista (virtual o presencial según el caso) y firmar un acuerdo de adopción y compromiso de esterilización.</p>
      </ul>
      <ul>
        <p><span className="font-bold">PASO 5 ENTREGA:</span> Una vez confirmada la adopción, se hace entrega del peludo en el domicilio del adoptante.</p>
      </ul>
      <ul>
        <p><span className="font-bold">PASO 6 SEGUIMIENTO:</span> Una vez entregada la mascota iniciamos un proceso de seguimiento para comprobar el estado en el que se encuentra la mascota.</p>
      </ul>
    </ol>,
  },
  {
    id: 4,
    title: "¿Qué necesitamos para lograrlo?",
    par: "Voluntarios que deseen unirse a las actividades pro fondos de la fundación y padrinos que deseen donar una donación mensual de $10.000,00 para costear los insumos de nuestro modelo. Esto financia: Transporte, atención veterinaria, tratamiento médico, vacunas, alimento, entrenador/educador.",
  },
];

function FAQ_Home() {
  return (
    <div className="w-full mx-auto">
      <div className="flex justify-center items-center w-full max-w-screen-2xl mx-auto h-full">
        <div className="w-[90%] lg:w-9/12 py-8 md:py-10 lg:py-16">
          <div className="flex flex-col gap-2 text-left mb-6">
            <h2 className="par-2">Adopción</h2>
            <h1 className="text-lg lg:text-3xl font-semibold text-primaryFont">
              PREGUNTAS FRECUENTES
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row items-start">
            <div className="mb-4 lg:mb-0 lg:mr-4 w-full lg:w-1/2 lg:hidden">
              <Image
                src={
                  "https://res.cloudinary.com/dorljfo6v/image/upload/v1718047294/huellitas/home-preguntasfrecuentes-mobile_qzzqdy.png"
                }
                width={700}
                height={700}
                className="rounded-lg w-full object-cover"
                alt="Sing dog Mobile"
              />
            </div>
            <div className='flex w-full'>
              <Image
                src={
                  "https://res.cloudinary.com/dorljfo6v/image/upload/v1718046053/huellitas/adopcion-faq-desktop.png"
                }
                width={700}
                height={700}
                className="rounded-xl lg:w-5/12 hidden lg:block lg:mr-7 object-cover self-start relative"
                alt="Sing dog desktop"
              />

              <div className="w-full flex flex-col space-y-4">
                <Accord items={items} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ_Home;
