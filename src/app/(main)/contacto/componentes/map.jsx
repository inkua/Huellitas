
function map(){
    return(
        <div className='w-full bg-tertiaryColor h-fit  lg:h-fit'>
            <div className="w-full h-full max-w-screen-2xl mx-auto  grid grid-cols-1 gap-6 content-start  lg:grid-cols-2 lg:gap-0  lg:flex lg:h-fit">          
                <div className='lg:flex lg:justify-end lg:w-full  w-10/12 h-2/5  max-w-screen-2xl relative mx-16 mt-8 lg:mb-12  lg:ml-8 lg:h-fit'>
                    <div className='grid grid-cols-1'>
                        <div>
                            <h1 className='text-2xl text-primaryFont text-h1-w font-bold mt-6 lg:mt-12'>¿DÓNE ESTAMOS?</h1>
                            <p className='text-primaryFont mb-6'>Av Cabildo 2578 , esq. Pedro Borra</p>
                        </div>
                        <iframe className='lg:w-[60%]  w-full h-[300px] lg:h-[400px] rounded-2xl lg:rounded-none content-center lg:content-end' width="75%" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Cartagena,%20Colombia+(Huellitas)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        <div>
                            <h1 className='text-2xl text-primaryFont text-h1-w font-bold mt-6 lg:mt-12'>TELÉFONO</h1>
                            <p className='text-primaryFont mb-6'>0000-0000</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 mb-12'>
                    <h1 className='text-2xl text-primaryFont text-h1-m font-bold mt-6 lg:mt-12'>¿Tienes alguna consulta?</h1>
                    <div>
                        <label for="first_name" className="hidden  lg:block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre y Apellido" required />
                    </div>
                    <div>
                        <label for="PhoneNumber" className="hidden  lg:block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número de télefono</label>
                        <input type="text" id="PhoneNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Télefono" required />
                    </div>
                    <div>
                        <label for="email" className="hidden  lg:block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                        <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Correo electrónico" required />
                    </div>
                    <div>
                        <label for="consulta" className="hidden  lg:block mb-2 text-sm font-medium text-gray-900 dark:text-white">Déjanos tu consulta</label>
                        <textarea type="text" id="consulta" className=" h-40 px-4 py-2 font-normal shadow-xs text-gray-900 bg-transparent placeholder-gray-400 focus:outline-none resize-none leading-relaxedbg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Consulta..." required />
                    </div>
                    <button className="bg-primaryColor text-white font-semibold rounded-lg p-2.5 w-full mt-4">Enviar</button>


                </div>
            </div>

        </div>

    )

}

export default map