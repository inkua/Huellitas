import Image from 'next/image';

function Sumate() {
    return (
        <div className="flex justify-center w-full bg-primaryColor">
            
            <div className="container w-5/5 lg:w-4/5 relative  max-w-screen-2xl mx-auto h-full" >

                <div className="text-white px-4 py-4 rounded-lg mb-6 text-left lg:text-justify relative top-4 lg:top-11 lg:ml-4 ">
                    <p className="text-h2-m lg:text-h1-w font-semibold font-[Poppins] ">TU TAMBIÉN PUEDES AYUDAR</p>
                </div>

                <div className="flex-1 absolute invisible lg:visible w-[50%] top-10 bottom-0 -right-24">
                    <Image src={'/assets/Sumate/girlDogDesktop.png'} 
                        className="w-fit h-fit"
                        width={500} 
                        height={100} 
                        style={{ width: '100%', height: '100%' }} 
                        quality={100} alt="ImageMobile" />
                </div>
                <div className="flex-1 absolute bottom-0 right-0 w-[50%] sm:top-5  lg:hidden mx-auto">
                    <Image src={'/assets/Sumate/girlDogMobile.png'} 
                    width={500} 
                    height={100} 
                    style={{ width: '100%', height: '100%' }} 
                    quality={100} 
                    alt="ImageMobile" />
                </div>

                <div className="flex items-center w-full">  
                    <div className="flex-1 ">

                        <div className="w-full px-6 py-4 rounded-lg mb-6 hidden lg:grid  lg:grid-cols-1 lg:grid-rows-1 relative top-3">
                            <input type="text" placeholder="Escribe tu nombre completo" className="w-6/12  px-4 py-2 bg-white rounded-full border border-gray-300 mb-4 placeholder-gray-500 text-primaryFont" />
                            <div>
                                <input type="text" placeholder="Danos un número para contactarte" className="w-4/12  px-4 py-2 bg-white rounded-full border border-gray-300 mr-2 placeholder-gray-500 text-primaryFont" />
                                <input type="text" placeholder="Dejanos tu mail" className="w-4/12 px-4 py-2 bg-white rounded-full border border-gray-300 mr-2 placeholder-gray-500 text-primaryFont grow " />
                            </div>
                            <div className='py-4 mt-3 mb-6'>
                                <button className="shadow-xl px-6 w-fit h-8  bg-transparent   border-white border-2 text-white rounded-full text-center  font-[Poppins] text-p3-m mr-3"> QUIERO SER VOLUNTARIO</button>
                                <button className="shadow-xl px-6 w-fit h-8  bg-transparent px-3 border-white border-2 text-white rounded-full text-center font-[Poppins] text-p3-m"> QUIERO SER PADRINO</button>
                            </div>
                        </div>

                        <div className=" lg:hidden grid grid-cols-1 grid-rows-1 px-2 py-4 rounded-lg mb-6 gap-between space-y-4">
                            <input type="text" placeholder="Nombre completo" className="w-3/5 sm:w-[60%]  px-4 py-2 bg-white rounded-full border border-gray-300 mb-4 placeholder-gray-500 text-primaryFont" />
                            <input type="text" placeholder="Celular" className="w-2/5 sm:w-5/12   px-4 py-2 bg-white rounded-full border border-gray-300 mr-2 placeholder-gray-500 text-primaryFont" />
                            <input type="text" placeholder="Mail" className="w-2/5 sm:w-5/12  px-4 py-2 bg-white rounded-full border border-gray-300 placeholder-gray-500 text-primaryFont" />
                            <button className="px-1 py-2 w-fit sm:w-[30%] h-12 bg-transparent border-2 border-white text-white rounded-full text-center font-[Poppins] text-p3-m">QUIERO SER PADRINO</button>
                            <button className="px-1 py-2 w-fit sm:w-[30%] h-12 bg-transparent border-2 border-white text-white rounded-full text-center font-[Poppins] text-p3-m">QUIERO SER VOLUNTARIO</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Sumate;
