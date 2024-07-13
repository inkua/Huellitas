import Image from "next/image";
import Accord from "../Accordion/Accordion";

let items = [
  {
    id: 1,
    title: "¿Que hacemos?",
    par: "Rescatamos animales en condiciones vulnerables, los rehabilitamos y entregamos a hogares/familias seguros y responsables.",
  },
  {
    id: 2,
    title: "¿Cómo lo logró?",
    par: "Con la disposición del equipo Huellitas, amor y dedicación. Nuestro modelo de 6 Pasos para Una Final Feliz hace posible transformar la historia de los animales rescatados. Lo más importante para lograrlo son las donaciones y apoyo de nuestra familia Huellitas, sin ellos nada de eso sería posible.",
  },
  {
    id: 3,
    title: "¿Cuáles son los 6 pasos?",
    par: <ol className="flex flex-col gap-2">
      <ul>
        <p><span className="font-bold">PASO 1 RESCATE:</span> Nos alertamos de algún peludo que necesita ayuda y acudimos a rescatarlo en el lugar que se encuentre. (ENTRE $20.000,00 HASTA 120.000.00) SI ES FUERA DE LA CIUDAD VARÍA EL VALOR</p>
      </ul>
      <ul>
        <p> <span className="font-bold">PASO 2 INGRESO A LA VETERINARIA:</span> Nos encargamos que el peludo sea ingresado en nuestras veterinarias de confianza, siendo atendido.</p>
      </ul>
      <ul>
        <p><span className="font-bold">PASO 3 REHABILITACIÓN:</span> A partir de aquí empieza un tiempo de rehabilitación donde el peludo recibe atención médica necesaria que lo ayude a recuperarse tanto físicamente como mentalmente.</p>
      </ul>
      <ul>
        <p><span className="font-bold">PASO 4 ADOPCIÓN:</span> Empezamos el proceso de adopción, con la toma de material gráfico, difusión de este, donde las familias interesadas deberán diligenciar un formulario y posterior a eso una entrevista virtual o presencial, dado el caso. Finalmente deben firmar un acuerdo de adopción y compromiso de esterilización, dado el caso.</p>
      </ul>
      <ul>
        <p><span className="font-bold">PASO 5 ENTREGA:</span> Una vez confirmada la adopción se hace entrega del peludo en el domicilio del adoptante.</p>
      </ul>
      <ul>
        <p><span className="font-bold">PASO 6 SEGUIMIENTO:</span> Una vez entregada la mascota iniciamos procesos de seguimiento para comprobar el estado en el que se encuentra la mascota. </p>
      </ul>
    </ol>,
  },
  {
    id: 4,
    title: "¿Qué necesito para lograrlo?",
    par: "Voluntarios que deseen unirse a las actividades pro fondos de la fundación y padrinos que deseen donar una donación mensual de $10.000,00 para costear los insumos de nuestro modelo. Esto financia: Transporte, atención veterinaria, tratamiento médico, vacunas, alimento, entrenador/educador.",
  },
];

function FAQ_Adopcion() {
  return (
    <div id="preguntas-frecuentes" className=" w-full mx-auto font-[Poppins]">
      <div className="w-full max-w-screen-2xl mx-auto h-full">
        <div className="w-[90%] lg:w-9/12 m-auto">
          <div className="text-left my-4 mt-6 ">
            <h2 className="text-lg text-primaryFont py-2">Adopción</h2>
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

export default FAQ_Adopcion;
