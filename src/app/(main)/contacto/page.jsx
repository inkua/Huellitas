import Map from "./componentes/map.jsx"

export const metadata = {
    title: 'Contacto | Huellitas Cartagena',
    description: 'Ponte en contacto con Huellitas Cartagena: descubre todas las formas de comunicación disponibles para que puedas hacer preguntas, ofrecer tu apoyo o enviar tus sugerencias. En nuestra página, encontrarás nuestros perfiles en redes sociales y un formulario para enviarnos un correo electrónico. ¡Esperamos saber de ti!',
}

function Contacto() {
    return (
        <main className="">
            <section className="w-full">
                <Map />
            </section>
            <section className="w-full">
                <div className="w-full h-full mx-auto max-w-screen-2xl flex justify-center py-14 md:py-18 lg:py-24">
                    <div className="w-[75%] flex flex-col gap-6">
                        <div>
                            <p className='text-primaryFont text-p3-m text-center mb-2'>Para llegar a más personas y poder seguir ayudando</p>
                            <h1 className='par-1 !font-bold text-center'>¡NO TE OLVIDES DE SEGUIRNOS EN NUESTRAS REDES!</h1>
                        </div>

                        <div className="flex justify-center">
                            <div className="flex flex-col md:flex-row md:justify-center w-[80%] gap-2 md:gap-8">

                                <div className="flex items-center justify-left">
                                    <div className="bg-ig-mobile bg-no-repeat bg-contain w-[24px] h-[24px] md:w-[35px] md:h-[35px]"></div>
                                    <a className=" !text-grayFont par-3 ml-2 hover:!text-gray-800 duration-150" href="https://www.instagram.com/huellitas.ctgna/" target="_blank" rel="noreferrer">@huellitas.ctgna</a>
                                </div>

                                <div className="flex items-center justify-left">
                                    <div className="bg-tk-mobile bg-no-repeat bg-contain w-[24px] h-[24px] md:w-[35px] md:h-[35px]"></div>
                                    <a className=" !text-grayFont par-3 ml-2 hover:!text-gray-800 duration-150" href="https://www.tiktok.com/@huellitascartagena" target="_blank" rel="noreferrer" >@huellitascartagena</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contacto;
