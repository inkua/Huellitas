"use client";

//import Image from "next/image";
import { useState } from "react";

function Card({ name, age, source, characteristics, gender, story }) {
    const [info, setInfo] = useState(false);

    return (
        <div role="listItem">
            <div className="flex flex-col gap-4 items-center lg:gap-6">
                <div className="w-full aspect-square overflow-hidden rounded-3xl relative">
                    <img
                        src={source}
                        alt="Foto del perrito"
                        width={700}
                        height={700}
                        className="absolute w-full h-full flex object-cover"
                    />

                    {/* TO DO */}
                    {/* <Image
                        src={source}
                        alt="Foto del perrito"
                        width={700}
                        height={700}
                        className="flex w-full"
                    /> */}
                </div>
                <h1 className="text-center uppercase par-3 md:par-2 !font-semibold text-nowrap">
                    <span>{name + " - "}</span>
                    <span className="hidden lg:inline-block">{(gender ? " MACHO" : "HEMBRA") + " - "}</span>
                    <span>{age + (age != 1 ? " AÑOS" : " AÑO")}</span>
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
                        <div className="max-w-screen-2xl max-h-[95%] overflow-hidden mx-auto grid md:grid-cols-[25%_1fr] w-10/12 md:w-[90%] lg:w-9/12 gap-4 lg:gap-14 p-6 lg:p-10 bg-white rounded-3xl shadow-lg relative" role="contentInfo">
                            <div className="flex w-[50%] md:w-full h-full aspect-square md:aspect-[9/12] items-center overflow-hidden rounded-3xl relative" role="presentation">
                                <img
                                    src={source}
                                    alt="Foto del perrito"
                                    width={900}
                                    height={900}
                                    className="w-full h-full absolute rounded-3xl object-cover"
                                />

                                {/* <Image
                                    src={source}
                                    alt="Foto del perrito"
                                    width={900}
                                    height={900}
                                    className="w-full rounded-3xl"
                                ></Image> */}
                            </div>

                            <div className="flex h-full flex-col justify-between gap-4 overflow-y-scroll" role="list">
                                <h1 className="font-bold heading-2">{name}</h1>
                                <h1 className="!font-bold par-1">
                                    Edad:{" "}
                                    <span className="par-1">
                                        {age}
                                    </span>
                                </h1>
                                <p className="font-bold par-1">
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
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        className="primary-btn"
                                    >
                                        QUIERO ADOPTARLO
                                    </button>
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
