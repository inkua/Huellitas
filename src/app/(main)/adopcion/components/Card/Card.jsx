"use client";

//import Image from "next/image";
import { useState } from "react";

function Card({ name, age, source, characteristics, gender, story }) {
    const [info, setInfo] = useState(false);

    return (
        <div role="listItem">
            <div className="flex flex-col gap-4 items-center lg:gap-6">
                <div className="w-full overflow-hidden rounded-3xl">
                    <img
                        src={source}
                        alt="Foto del perrito"
                        width={700}
                        height={700}
                        className="flex w-full"
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
                <h1 className="font-bold uppercase par-2">
                    {name +
                        " - " +
                        (gender ? "MACHO" : "HEMBRA") +
                        " - " +
                        age +
                        " AÑOS"}
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
                    <div
                        className="flex fixed inset-0 max-w-screen-2xl mx-auto justify-center items-center gap-8 z-50"
                        role="section"
                    >
                        <div
                            className="max-w-screen-2xl mx-auto grid lg:grid-cols-[25%_1fr] w-10/12 lg:w-9/12 gap-4 lg:gap-14 p-6 lg:p-10 bg-white rounded-3xl shadow-lg"
                            role="contentInfo"
                        >
                            <div
                                className="flex w-full h-40 lg:h-auto items-center overflow-hidden rounded-3xl"
                                role="presentation"
                            >
                                <img
                                    src={source}
                                    alt="Foto del perrito"
                                    width={900}
                                    height={900}
                                    className="w-full rounded-3xl"
                                />

                                {/* <Image
                                    src={source}
                                    alt="Foto del perrito"
                                    width={900}
                                    height={900}
                                    className="w-full rounded-3xl"
                                ></Image> */}
                            </div>

                            <div
                                className="flex flex-col justify-center items-start gap-4"
                                role="list"
                            >
                                <h1 className="font-bold heading-2">{name}</h1>
                                <h1 className="font-bold par-1">
                                    Edad:{" "}
                                    <span className="font-medium par-1">
                                        {age}
                                    </span>
                                </h1>
                                <p className="font-bold par-1">
                                    Caracteristicas:{" "}
                                    <span className="font-medium par-1">
                                        {characteristics}
                                    </span>
                                </p>
                                <p className="font-bold par-1">
                                    Historia:{" "}
                                    <span className="font-medium par-1">
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
                                    <button
                                        type="button"
                                        onClick={() => setInfo(!info)}
                                        className="close-btn"
                                    >
                                        CERRAR
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;
