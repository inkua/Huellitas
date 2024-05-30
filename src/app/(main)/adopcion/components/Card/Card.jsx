'use client'

import Image from "next/image"
import { useState } from "react"

function Card({name, age, source}){
    const [info, setInfo] = useState(false)

    return (
        <div role="listItem">
            <div className="flex flex-col gap-4 items-center lg:gap-8">
                <div className='w-full overflow-hidden rounded-full'>
                    <Image src={source} alt='Foto del perrito' width={100} height={100} className='flex w-full' />
                </div>
                <h1 className='font-bold par-2'>{name}</h1>
                <button type="button" onClick={() => setInfo(!info)} className="w-full primary-btn">SABER MÁS</button>
            </div>

            {info && 
                    (
                        <div className='flex fixed inset-0 justify-center items-center gap-8 bg-black bg-opacity-50 backdrop-blur-sm'>
                            <div className='grid lg:grid-cols-[25%_1fr] w-9/12 lg:gap-14 p-6 lg:p-10 bg-white rounded-3xl shadow-lg'>
                                <div className='flex w-full h-40 lg:h-auto md:h-auto items-center overflow-hidden'>
                                    <Image src={source} alt='Foto del perrito' width={100} height={100} className='w-full rounded-3xl'></Image>
                                </div>

                                <div className='flex flex-col justify-center items-start gap-6'>
                                    <h1 className='font-bold heading-2'>{name}</h1>
                                    <h1 className='font-bold par-1'>Edad: <span className='font-medium par-1'>{age}</span></h1>
                                    <p className='font-bold par-1'>Caracteristicas: <span className='font-medium par-1'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore totam harum officiis voluptas sit! Facere possimus recusandae culpa, ipsum aliquid corrupti ipsam minus quos iste?
                                        </span>
                                    </p>
                                    <p className='font-bold par-1'>Historia: <span className='font-medium par-1'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore totam harum officiis voluptas sit! Facere possimus recusandae culpa, ipsum aliquid corrupti ipsam minus quos iste?
                                        </span>
                                    </p>

                                    <button type="button" onClick={() => setInfo(!info)} className="primary-btn">
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
