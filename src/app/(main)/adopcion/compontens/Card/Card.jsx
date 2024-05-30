'use client'

import Image from "next/image"
import { useState } from "react"

function Card() {
    const [info, setInfo] = useState(false)

    return (
        <div role="listItem">
            <div className="flex flex-col gap-4 items-center lg:gap-8">
                <div className='w-full overflow-hidden rounded-full'>
                    <Image src={"/assets/Adopcion/adopcion_001.jpg"} alt='Foto del perrito' width={100} height={100} className='flex w-full' />
                </div>
                <h1 className='font-bold par-2'>MAX - 3 AÑOS</h1>
                <button type="button" onClick={() => setInfo(!info)} className="w-full primary-btn">SABER MÁS</button>
            </div>

            {info && 
                    (
                        <div className='flex fixed inset-0 justify-center items-center gap-8 backdrop-blur-sm'>
                            <div className='grid lg:grid-cols-[25%_1fr] w-9/12 lg:gap-14 p-10 bg-white rounded-3xl shadow-lg'>
                                <div className='flex w-full items-center'>
                                    <Image src={"/assets/Adopcion/adopcion_001_lg.jpg"} alt='Foto del perrito' width={100} height={100} className='hidden lg:block w-full rounded-3xl'></Image>
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
    )
}

export default Card
