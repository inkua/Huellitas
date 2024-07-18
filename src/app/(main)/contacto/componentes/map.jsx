import Image from "next/image";

function map(){

    return(
        <div className='w-full bg-tertiaryColor h-fit'>
            <div className="w-full h-full max-w-screen-2xl mx-auto  grid grid-cols-1 gap-6 content-start  lg:grid-cols-2 lg:gap-0 shadow-2xl mb-3">          
                <div className='w-full  max-w-screen-2xl '>
                    <div className='grid grid-cols-1 ml-[10%]'>
                        <div>
                            <h1 className='text-2xl text-primaryFont text-h2-m font-bold mt-6 lg:mt-12'>¿DÓNE ESTAMOS?</h1>
                            <p className='text-primaryFont mb-6 text-p3-m'>Av Cabildo 2578 , esq. Pedro Borra</p>
                        </div>
                        <iframe className='lg:w-[70%] w-[90%] h-[300px] lg:h-[400px] ' width="400" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Cartagena,%20Colombia+(Huellitas)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        <div className="justify-start w-full">
                            <h1 className='text-2xl text-primaryFont font-bold mt-6 lg:mt-12 text-h2-m'>TELÉFONO</h1>
                            <p className='text-primaryFont mb-6 text-p3-m'>0000-0000</p>
                        </div>
                    </div>
                </div>
            <div className="ml-[10%]">
                <h1 className='text-2xl text-primaryFont text-h2-m mb-4 font-bold mt-6 lg:mt-12'>¿Tienes alguna consulta?</h1>
                <div className='grid grid-cols-1 mb-12 w-[80%] ] gap-y-3'>
                    <div>
                        <label for="first_name" className="hidden  lg:block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                        <input type="text" id="first_name" className="bg-gray-50  border-2 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Nombre y Apellido" required />
                    </div>
                    <div>
                        <label for="PhoneNumber" className="hidden  lg:block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número de télefono</label>
                        <input type="text" id="PhoneNumber" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Télefono" required />
                    </div>
                    <div>
                        <label for="email" className="hidden  lg:block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                        <input type="text" id="email" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Correo electrónico" required />
                    </div>
                    <div>
                        <label for="consulta" className="hidden  lg:block mb-2 text-sm font-medium text-gray-900 dark:text-white">Déjanos tu consulta</label>
                        <textarea type="text" id="consulta" className="bg-gray-50 border-gray-300 text-gray-900  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white h-40 px-4 py-2 font-normal shadow-xs resize-none leading-relaxed border-2   text-sm rounded-lg   block w-full p-2.5 " placeholder="Dejanos aquí tu consulta" required />
                    </div>
                    <button className="bg-primaryColor text-white font-semibold rounded-lg p-2.5 lg:p-2 w-full lg:w-[40%] mt-4 ">Enviar Consulta</button>

                </div>
            </div>
            </div>
            <div className="bg-whitegrid grid-cols-1 gap-0 content-end bg-white">
                    <p className='text-primaryFont mb-1 text-p3-m justify-end text-center mt-8'>Para llegar a más personas y poder seguir ayudando</p>
                    <h1 className='text-2xl text-primaryFont font-bold text-h2-m justify-end  text-center'>¡NO TE OLVIDES DE SEGUIRNOS EN NUESTRAS REDES!</h1>
                    <div className="grid-cols-1 content-end flex flex-col ml-[20%] gap-4 mb-4">
                        <div className="flex content-center flex-row">
                            <Image className="w-[10%]" src="/assets/logos/png/instagramLogo.png"  alt="faceboo" width={150} height={150} />
                            <a className=" text-grayFont mb-1 text-p3-m ml-2 mt-1" href="@huellitas.ctgna">@huellitas.ctgna</a>
                        </div>
                        <div className="flex content-center">
                            <Image className="w-[10%]" src="/assets/logos/png/tiktokLogo2.png"  alt="faceboo" width={150} height={150} />
                            <a className=" text-grayFont mb-1 text-p3-m ml-2 mt-1" href="@huellitascartagena ">@huellitascartagena</a>
                        </div>
                   </div>
                
                
            </div>
                
           

        </div>

    )

}

export default map