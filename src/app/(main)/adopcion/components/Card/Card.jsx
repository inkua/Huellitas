"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function Card({ name, age, source, characteristics, gender, story }) {
    const [info, setInfo] = useState(false)
    const [copy, setCopy] = useState(false)
    let type = 1  //Variable auxiliar para testear edades

    const copyToClipboard = async ({ name }) => {
        let message = ''
        try {
            message = '¡Hola! Me gustaría adoptar a ' + name + '.'
            setCopy(true)
            await navigator.clipboard.writeText(message);
            setTimeout(() => {
                //window.open('https://www.instagram.com/direct/t/17843808839770123', '_blank')
                setCopy(false)
            }, 2000)
        } catch (err) {
            console.error('Error al copiar el texto: ', err)
        }
    };

    return (
        <div role="listItem">
            <div className="flex flex-col gap-4 items-center lg:gap-6">
                <div className="w-full aspect-square overflow-hidden rounded-3xl relative">
                    <Image
                        src={source}
                        alt="Foto del perrito"
                        width={700}
                        height={700}
                        className="absolute w-full h-full flex object-cover"
                    />
                </div>
                <h1 className="text-center uppercase par-3 md:par-2 !font-semibold text-nowrap">
                    <span>{name + " - "}</span>
                    <span className="hidden lg:inline-block">{(gender ? " MACHO" : "HEMBRA") + " - "}</span>
                    <span>{" " + age + (type == 0 ? (age != 1 ? " años" : " año") : (age != 1 ? ' meses' : ' mes'))}</span>
                </h1>
                <button
                    type="button"
                    onClick={() => setInfo(!info)}
                    className="w-full primary-btn"
                >
                    SABER MÁS
                </button>
            </div>

            {info && (
                <div className="flex fixed inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-50">
                    <div className="flex fixed inset-0 max-w-screen-2xl mx-auto justify-center items-center gap-8 z-50" role="section">
                        <div className="max-w-screen-2xl max-h-[95%] overflow-hidden mx-auto overflow-y-auto no-scrollbar grid md:grid-cols-[25%_1fr] w-10/12 md:w-[90%] lg:w-9/12 gap-4 lg:gap-14 p-6 lg:p-10 bg-white rounded-3xl shadow-lg relative" role="contentInfo">
                            <div className="flex w-[50%] md:w-full h-full aspect-square md:aspect-[9/12] items-center overflow-hidden rounded-3xl relative" role="presentation">
                                <Image
                                    src={source}
                                    alt="Foto del perrito"
                                    width={900}
                                    height={900}
                                    className="w-full h-full absolute rounded-3xl object-cover"
                                />
                            </div>

                            <div className="flex h-full flex-col justify-between gap-4" role="list">
                                <h1 className="font-bold heading-2 uppercase">{name}</h1>
                                <h1 className="!font-bold par-1">
                                    Edad:{" "}
                                    <span className="par-1">
                                        {" " + age + (type == 0 ? (age != 1 ? " años" : " año") : (age != 1 ? ' meses' : ' mes'))}
                                    </span>
                                </h1>
                                <p className="!font-bold par-1">
                                    Caracteristicas:{" "}
                                    <span className="par-1">
                                        {characteristics}
                                    </span>
                                </p>
                                <p className="!font-bold par-1">
                                    Historia:{" "}
                                    <span className="par-1">
                                        {story}
                                    </span>
                                </p>
                                <div className="flex gap-2 relative items-center">
                                    {/* <button type="button" className="primary-btn" onClick={() => copyToClipboard({ name })}>
                                        QUIERO ADOPTARLO
                                    </button>
                                    <p className={`par-3 !text-primaryColor ${copy ? 'block' : 'hidden'}`}>Mensaje copiado</p> */}

                                    {/* <button type="button" className="primary-btn z-20" onClick={() => copyToClipboard({ name })}>
                                        QUIERO ADOPTARLO
                                    </button>
                                    <div className="relative w-auto h-full">
                                        <div className={`absolute flex h-full items-center aspect-square gap-2 duration-100 z-10 ${copy ? 'left-0' : 'left-[-100px]'}`}>
                                            <Image src={'assets/Footer/instagram.svg'} width={100} height={100} alt="Logo Instagram" className="h-8 lg:h-full" />
                                            <Image src={'assets/Footer/whatsapp.svg'} width={100} height={100} alt="Logo Instagram" className="h-8 lg:h-full" />
                                        </div>
                                    </div> */}

                                    <Link href={`mailto:${'gonzaarp2020@gmail.com'}?subject=${encodeURIComponent('ADOPCION ' + name.toUpperCase())}&body=${encodeURIComponent('Me gustaria adoptar a ' + name + '.')}`} target='_blank'>
                                        <button type="button" className="primary-btn">
                                            QUIERO ADOPTARLO
                                        </button>
                                    </Link>

                                </div>
                            </div>
                            <div className="absolute top-2 right-4 heading-2 cursor-pointer hover:text-primaryColor duration-200" onClick={() => setInfo(!info)}>✖</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;
