import Image from "next/image";

export const NuestraHistoria = () => {
  return (
    <section className=" bg-colorTerciario py-10">
      <div className="flex flex-col w-[80%] mx-auto max-w-screen-2xl">
        <h2
          className="text-blackHtas font-bold mb-6 heading-1"
          id="nuestra-historia"
        >
          NUESTRA HISTORIA
        </h2>
        <div className="flex flex-col md:flex-row md:gap-36 ">
          <p className="flex flex-col gap-4 md:w-1/2 font-normal par-3">
            <span>
              <spam className="font-bold text-blackHtas">
                Huellitas Cartagena{" "}
              </spam>
              nace el 15 de mayo del 2019. La razón que me motivó a crear esta
              fundación fue el amor que siento por los animales. Desde pequeña
              he tenido mascotas que habían estado en otra ciudad pero desde que
              obtuve a mi nueva perrita Pucca Sophia el sentimiento creció más.
            </span>

            <span>
              Empecé hace aproximadamente 2 años ayudar animalitos de la calle
              los cuales algunos de ellos se encuentran ahora mismo en un hogar
              lleno de amor y otros desafortunadamente murieron pero recibieron
              mucho amor en sus últimos días. Ver el cambio de vida de estos
              hermosos seres me ayudó a materializar la idea de crear Huellitas
              Cartagena.
            </span>

            <span>
              Ser parte de este proyecto ha traido mucho más amor, entrega y
              humanidad en mi vida. También mucha alegría de ver los cambios que
              logramos sacándolos de las calles y llevándolos a una familia.
            </span>
          </p>

          {/* IMAGENES */}
          <div class="flex flex-col m-6 md:mt-0 pointer-events-none">
            {/* <!-- Imagen grande --> */}
            <Image
              src={"/assets/Fundation/image2.png"}
              alt="Imagen grande"
              class="w-full h-auto mb-4 rounded-lg"
              height={260}
              width={511}
            />

            <div class="flex w-full gap-4">
              {/* <!-- Imágenes pequeñas --> */}

              <Image
                src={"/assets/Fundation/image3.png"}
                alt="Imagen pequeña 1"
                class="w-full h-auto mb-4 rounded-lg"
                height={160}
                width={90}
              />

              <Image
                src={"/assets/Fundation/image4.png"}
                alt="Imagen pequeña 2"
                class="w-full h-auto mb-4 rounded-lg"
                height={160}
                width={90}
              />

              <Image
                src={"/assets/Fundation/image5.png"}
                alt="Imagen pequeña 3"
                class="w-full h-auto mb-4 rounded-lg"
                height={160}
                width={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};