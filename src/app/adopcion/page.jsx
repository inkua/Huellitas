"use client"
import Image from 'next/image'
import adopcion_001 from '../../../public/assets/Adopcion/adopcion_001.jpg'
import adopcion_001_lg from '../../../public/assets/Adopcion/adopcion_001_lg.jpg'
import { useState } from "react"
import FAQ_Adopcion from '../componets/FAQ_Adopcion/FAQ_Adopcion'

function Adopcion() {
    const [info, setInfo] = useState(false);

    const viewInfo = () => {
        setInfo(!info);
    }

    return (
        <section>
            <div className='w-full h-72 lg:bg-tertiaryColor'>
                <div className="flex w-full h-full max-w-screen-2xl mx-auto items-end lg:justify-center lg:items-center p-8 lg:p-0 lg:py-16 bg-adoption-banner lg:bg-none bg-cover bg-opacity-80">
                    <div className="flex flex-col w-full lg:w-9/12 gap-8">
                        <h1 className="font-bold heading-1">ADOPTALOS</h1>
                        <p className="hidden lg:block font-normal par-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloret.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex w-full max-w-screen-2xl mx-auto justify-center items-center py-16">
                <div className="flex flex-col w-full lg:w-9/12 gap-y-20">
                    <h1 className="hidden lg:block font-bold heading-1">BUSCAMOS UN HOGAR CON AMOR</h1>
                    <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 px-4 gap-x-4 lg:gap-x-16 gap-y-20">
                        
                        <div className="flex flex-col gap-4 items-center lg:gap-8">
                            <div className='w-full overflow-hidden rounded-full'>
                                <Image src={adopcion_001} alt='Foto del perrito' width={100} height={100} className='flex w-full'></Image>
                            </div>
                            <h1 className='font-bold par-2'>MAX - 3 AÑOS</h1>
                            <button type="button" onClick={() => viewInfo()} className="w-full primary-btn">SABER MÁS</button>
                        </div>

                        <div className="flex flex-col gap-4 items-center lg:gap-8">
                            <div className='w-full overflow-hidden rounded-full'>
                                <Image src={adopcion_001} alt='Foto del perrito' width={100} height={100} className='flex w-full'></Image>
                            </div>
                            <h1 className='font-bold par-2'>MAX - 3 AÑOS</h1>
                            <button type="button" onClick={() => viewInfo()} className="w-full primary-btn">SABER MÁS</button>
                        </div>

                        <div className="flex flex-col gap-4 items-center lg:gap-8">
                            <div className='w-full overflow-hidden rounded-full'>
                                <Image src={adopcion_001} alt='Foto del perrito' width={100} height={100} className='flex w-full'></Image>
                            </div>
                            <h1 className='font-bold par-2'>MAX - 3 AÑOS</h1>
                            <button type="button" onClick={() => viewInfo()} className="w-full primary-btn">SABER MÁS</button>
                        </div>

                        <div className="flex flex-col gap-4 items-center lg:gap-8">
                            <div className='w-full overflow-hidden rounded-full'>
                                <Image src={adopcion_001} alt='Foto del perrito' width={100} height={100} className='flex w-full'></Image>
                            </div>
                            <h1 className='font-bold par-2'>MAX - 3 AÑOS</h1>
                            <button type="button" onClick={() => viewInfo()} className="w-full primary-btn">SABER MÁS</button>
                        </div>

                        <div className="flex flex-col gap-4 items-center lg:gap-8">
                            <div className='w-full overflow-hidden rounded-full'>
                                <Image src={adopcion_001} alt='Foto del perrito' width={100} height={100} className='flex w-full'></Image>
                            </div>
                            <h1 className='font-bold par-2'>MAX - 3 AÑOS</h1>
                            <button type="button" onClick={() => viewInfo()} className="w-full primary-btn">SABER MÁS</button>
                        </div>

                        <div className="flex flex-col gap-4 items-center lg:gap-8">
                            <div className='w-full overflow-hidden rounded-full'>
                                <Image src={adopcion_001} alt='Foto del perrito' width={100} height={100} className='flex w-full'></Image>
                            </div>
                            <h1 className='font-bold par-2'>MAX - 3 AÑOS</h1>
                            <button type="button" onClick={() => viewInfo()} className="w-full primary-btn">SABER MÁS</button>
                        </div>

                    </div>
                </div>

                {info && 
                    (
                        <div className='flex fixed inset-0 justify-center items-center gap-8 backdrop-blur-sm'>
                            <div className='grid lg:grid-cols-[25%_1fr] w-9/12 lg:gap-14 p-10 bg-white rounded-3xl shadow-lg'>
                                <div className='flex w-full items-center'>
                                    <Image src={adopcion_001_lg} alt='Foto del perrito' width={100} height={100} className='hidden lg:block w-full rounded-3xl'></Image>
                                </div>

                                <div className='flex flex-col justify-center items-start gap-8'>
                                    <h1 className='font-bold heading-2'>MAX</h1>
                                    <h1 className='font-bold par-1'>Edad: <span className='font-medium par-1'>3 años</span></h1>
                                    <p className='font-bold par-1'>Caracteristicas: <span className='font-medium par-1'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore totam harum officiis voluptas sit! Facere possimus recusandae culpa, ipsum aliquid corrupti ipsam minus quos iste?
                                        </span>
                                    </p>
                                    <p className='font-bold par-1'>Historia: <span className='font-medium par-1'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore totam harum officiis voluptas sit! Facere possimus recusandae culpa, ipsum aliquid corrupti ipsam minus quos iste?
                                        </span>
                                    </p>

                                    <button type="button" onClick={() => viewInfo()} className="primary-btn">
                                        QUIERO ADOPTARLO
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='bg-tertiaryColor py-16'>
                <div className='max-w-screen-2xl mx-auto'>
                    <FAQ_Adopcion />
                </div>
            </div>
        </section>
    )
}

export default Adopcion