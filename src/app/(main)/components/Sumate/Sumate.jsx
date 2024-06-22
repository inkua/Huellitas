import Image from 'next/image';

function Sumate() {
    return (
        <section className="flex justify-center w-full bg-primaryColor py-8 md:py-10 lg:py-16 xs:bg-sample bg-1 bg-no-repeat bg-right-bottom md:bg-none bg-none">

            <div className="w-full max-w-screen-2xl mx-auto h-full" >

                <div className='w-[90%] lg:w-9/12 m-auto md:bg-sample bg-2 bg-no-repeat bg-right-bottom lg:bg-3'>
                    <h2 className="heading-1 font-bold !text-white">TÚ TAMBIÉN PUEDES AYUDAR</h2>
                    <div className="flex items-center w-full">

                        <form className="flex-1 mt-4 lg:py-4">
                            <div className="w-full  rounded-lg mb-6  grid  grid-cols-1 grid-rows-1 relative top-3">
                                <input type="text" placeholder="Nombre completo" className="w-8/12 sm:w-6/12 p-2 bg-white rounded-full border border-gray-300 placeholder-gray-500 text-primaryFont par-3 mb-[13px] md:mb-4"  />
                                <div className=' mb-[13px] md:mb-4 flex flex-col lg:flex-row gap-4'>
                                    <input type="text" placeholder="Celular" className="w-6/12 sm:w-4/12  p-2 bg-white rounded-full border border-gray-300 mr-2 placeholder-gray-500 text-primaryFont par-3" />
                                    <input type="text" placeholder="Correo" className="w-6/12 sm:w-4/12  p-2 bg-white rounded-full border border-gray-300 mr-2 placeholder-gray-500 text-primaryFont par-3" />
                                </div>
                                <div className='md:mt-3 flex flex-col-reverse md:flex-row gap-2 md:gap-5 mt-2'>
                                    <button className="secondary-btn !text-white !border-white w-fit"> QUIERO SER VOLUNTARIO</button>
                                    <button className="secondary-btn !text-white !border-white w-fit"> QUIERO SER PADRINO</button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Sumate;
