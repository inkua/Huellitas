import Image from "next/image";

export const NuestraHistoria = () => {
    return (
        <section className="bg-tertiaryColor py-10 mb-4 shadow-[0_6px_6px_-2px_rgba(0,0,0,0.3)]">
            <div className="flex flex-col w-full mx-auto max-w-screen-2xl">
                <div className="flex flex-col-reverse md:flex-row md:gap-8 mx-auto w-[90%] lg:w-[75%]">
                    <div className="">

                        <h1
                            className="text-primaryFont font-bold mb-6 heading-1"
                            id="nuestra-historia"
                        >
                            NUESTRA HISTORIA
                        </h1>
                        <p className="flex flex-col gap-4 font-normal par-3">
                            <span>
                                <span className="font-bold text-primaryFont">
                                    Huellitas Cartagena&nbsp;
                                </span>
                                nace el 15 de mayo del 2019. La razón que me motivó a crear esta
                                fundación fue el amor que siento por los animales. Desde pequeña
                                he tenido mascotas que habían estado en otra ciudad pero desde
                                que obtuve a mi nueva perrita Pucca Sophia el sentimiento creció
                                más.
                            </span>

                            <span>
                                Empecé hace aproximadamente 2 años ayudar animalitos de la calle
                                los cuales algunos de ellos se encuentran ahora mismo en un
                                hogar lleno de amor y otros desafortunadamente murieron pero
                                recibieron mucho amor en sus últimos días. Ver el cambio de vida
                                de estos hermosos seres me ayudó a materializar la idea de crear
                                Huellitas Cartagena.
                            </span>

                            <span>
                                Ser parte de este proyecto ha traido mucho más amor, entrega y
                                humanidad en mi vida. También mucha alegría de ver los cambios
                                que logramos sacándolos de las calles y llevándolos a una
                                familia.
                            </span>
                        </p>
                    </div>

                    {/* IMAGENES */}
                    <div className="w-full min-w-[250px] md:flex md:flex-col items-center pointer-events-none md:mt-20">
                        {/* Imagen grande */}
                        <Image
                            src={
                                "/assets/fundation/image2.png"
                            }
                            alt="Imagen grande"
                            className="h-auto mb-4 rounded-lg"
                            height={700}
                            width={700}
                        />

                        <div className="flex justify-between">
                            {/* Imágenes pequeñas */}
                            <Image
                                src={
                                    "/assets/fundation/image3.png"
                                }
                                alt="Imagen pequeña 1"
                                className="w-[32%] h-auto mb-4 rounded-lg"
                                height={700}
                                width={700}
                            />

                            <Image
                                src={
                                    "/assets/fundation/image4.png"
                                }
                                alt="Imagen pequeña 2"
                                className="w-[32%] h-auto mb-4 rounded-lg"
                                height={700}
                                width={700}
                            />

                            <Image
                                src={
                                    "/assets/fundation/image5.png"
                                }
                                alt="Imagen pequeña 3"
                                className="w-[32%] h-auto mb-4 rounded-lg"
                                height={700}
                                width={700}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
