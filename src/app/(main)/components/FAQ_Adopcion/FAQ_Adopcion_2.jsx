import Image from 'next/image';
import Accord from '../Accordion/Accordion';

function FAQ_Adopcion_2({ items }) {
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
                                className="rounded-xl lg:w-5/12 hidden lg:block lg:mr-7 self-start"
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
    )
}

export default FAQ_Adopcion_2;