import Image from 'next/image'
import adopcion_001 from '../../../public/assets/Adopcion/adopcion_001.jpg'

function Adopcion() {
    return (
        <section>
            <div className='w-full h-72 lg:bg-indigo-100'>
                <div className="flex w-full h-full max-w-screen-2xl mx-auto items-end lg:justify-center lg:items-center p-8 lg:p-0 lg:py-16 bg-adoption-banner lg:bg-none bg-cover bg-opacity-80">
                    <div className="flex flex-col w-full lg:w-9/12 gap-8">
                        <h1 className="font-bold text-4xl lg:text-3xl text-white lg:text-black">ADOPTALOS</h1>
                        <p className="hidden lg:block text-justify text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloret.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex w-full max-w-screen-2xl mx-auto justify-center items-center py-16">
                <div className="flex flex-col w-full lg:w-9/12 gap-y-20">
                    <h1 className="hidden lg:block font-bold text-3xl text-black">BUSCAMOS UN HOGAR CON AMOR</h1>
                    <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 px-4 gap-x-4 lg:gap-x-16 gap-y-20">
                        
                        <div className="flex flex-col gap-4 items-center lg:gap-8">
                            <div className='w-full overflow-hidden rounded-full'>
                                <Image src={adopcion_001} alt='Foto del perrito' width={100} height={100} className='flex w-full'></Image>
                            </div>
                            <h1 className='font-bold text-xl text-black'>MAX - 3 AÑOS</h1>
                            <button type="button" className="w-full py-6 lg:py-1 md:py-1 text-white bg-violetHtas hover:bg-pinkHtas rounded-full shadow-md shadow-grey-400">
                            SABER MÁS
                            </button>
                        </div>

                        <div className="flex flex-col gap-4 items-center lg:gap-8">
                            <div className='w-full overflow-hidden rounded-full'>
                                <Image src={adopcion_001} alt='Foto del perrito' width={100} height={100} className='flex w-full'></Image>
                            </div>
                            <h1 className='font-bold text-xl text-black'>MAX - 3 AÑOS</h1>
                            <button type="button" className="w-full py-6 lg:py-1 md:py-1 text-white bg-violetHtas hover:bg-pinkHtas rounded-full shadow-md shadow-grey-400">
                            SABER MÁS
                            </button>
                        </div>

                        <div className="flex flex-col gap-4 items-center lg:gap-8">
                            <div className='w-full overflow-hidden rounded-full'>
                                <Image src={adopcion_001} alt='Foto del perrito' width={100} height={100} className='flex w-full'></Image>
                            </div>
                            <h1 className='font-bold text-xl text-black'>MAX - 3 AÑOS</h1>
                            <button type="button" className="w-full py-6 lg:py-1 md:py-1 text-white bg-violetHtas hover:bg-pinkHtas rounded-full shadow-md shadow-grey-400">
                            SABER MÁS
                            </button>
                        </div>

                        <div className="flex flex-col gap-4 items-center lg:gap-8">
                            <div className='w-full overflow-hidden rounded-full'>
                                <Image src={adopcion_001} alt='Foto del perrito' width={100} height={100} className='flex w-full'></Image>
                            </div>
                            <h1 className='font-bold text-xl text-black'>MAX - 3 AÑOS</h1>
                            <button type="button" className="w-full py-6 lg:py-1 md:py-1 text-white bg-violetHtas hover:bg-pinkHtas rounded-full shadow-md shadow-grey-400">
                            SABER MÁS
                            </button>
                        </div>

                        <div className="flex flex-col gap-4 items-center lg:gap-8">
                            <div className='w-full overflow-hidden rounded-full'>
                                <Image src={adopcion_001} alt='Foto del perrito' width={100} height={100} className='flex w-full'></Image>
                            </div>
                            <h1 className='font-bold text-xl text-black'>MAX - 3 AÑOS</h1>
                            <button type="button" className="w-full py-6 lg:py-1 md:py-1 text-white bg-violetHtas hover:bg-pinkHtas rounded-full shadow-md shadow-grey-400">
                            SABER MÁS
                            </button>
                        </div>

                        <div className="flex flex-col gap-4 items-center lg:gap-8">
                            <div className='w-full overflow-hidden rounded-full'>
                                <Image src={adopcion_001} alt='Foto del perrito' width={100} height={100} className='flex w-full'></Image>
                            </div>
                            <h1 className='font-bold text-xl text-black'>MAX - 3 AÑOS</h1>
                            <button type="button" className="w-full py-6 lg:py-1 md:py-1 text-white bg-violetHtas hover:bg-pinkHtas rounded-full shadow-md shadow-grey-400">
                            SABER MÁS
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Adopcion