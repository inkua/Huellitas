"use client";

import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import Slider from "../components/Slider/Slider";
import Slider2 from "../components/Slider/slider2";

function Colaboracion() {
    const [modalVisible, setModalVisible] = useState({
        donar_dinero: false,
        donar_insumos: false,
        donar_servicios: false,
    });

    const openModal = (modalType) => {
        setModalVisible((prevState) => ({
            ...prevState,
            [modalType]: true,
        }));
    };

    const closeModal = () => {
        setModalVisible({
            donar_dinero: false,
            donar_insumos: false,
            donar_servicios: false,
        });
    };

    let items = [
        {
            id: 1,
            par: "",
            btn: "ECONÓMICAS",
            alt: "donación economica",
            source: "/assets/Colaboracion/colaboracion_001.jpg",
            action: () => openModal("donar_dinero"),
        },
        {
            id: 2,
            par: "",
            btn: "INSUMOS",
            alt: "donación insumos",
            source: "/assets/Colaboracion/colaboracion_002.jpg",
            action: () => openModal("donar_insumos"),
        },
        {
            id: 3,
            par: "",
            btn: "SERVICIOS",
            alt: "donación servicios",
            source: "/assets/Colaboracion/colaboracion_003.jpg",
            action: () => openModal("donar_servicios"),
        },
    ];

    const [itemsColab, setItemsColab] = useState(null);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    async function setData() {
        const res = await fetch(apiUrl + "/sponsors");
        setItemsColab(await res.json());
    }

    useEffect(() => {
        setData();
    }, []);

    return (
        <main className="relative">
            <section
                className="flex flex-col relative w-full h-80 lg:h-96 max-w-screen-2xl mx-auto bg-colab-banner bg-cover bg-center"
                role="banner"
            >
                <div className="flex absolute w-full lg:w-6/12 h-full items-end lg:justify-center p-6 ">
                    <div className="flex w-full lg:w-6/12 justify-center lg:justify-start items-end">
                        <h1 className="font-bold lg:font-semibold heading-1 lg:text-[3em] !text-white">
                            COLABORACIONES
                        </h1>
                    </div>
                </div>
            </section>

            <section className="flex flex-col w-full max-w-screen-2xl mx-auto justify-center items-center gap-8 py-16 bg-white">
                <h2 className="w-11/12 lg:w-9/12 lg:font-bold heading-1 lg:text-left font-semibold text-h1-m">
                    ¿COMO QUIERES COLABORAR?
                </h2>
                <Slider
                    items={items}
                    type={1}
                    def={2.15}
                    lg={3}
                    md={3}
                ></Slider>
            </section>

            <section className="flex w-full max-w-screen-2xl mx-auto justify-center items-center bg-white lg:justify-start lg:mb-28">
                <div className="flex flex-col w-11/12 lg:w-full gap-8 py-8">
                    <h2 className="font-bold heading-1 text-center lg:text-left lg:ml-[12rem]">
                        TIENDAS QUE COLABORAN
                    </h2>
                    {itemsColab && (
                        <Slider2
                            items={itemsColab}
                            type={0}
                            def={2.15}
                            lg={3}
                            md={3}
                        ></Slider2>
                    )}
                </div>
            </section>
            <Modal
                isOpenD={modalVisible.donar_dinero}
                isOpenI={modalVisible.donar_insumos}
                isOpenS={modalVisible.donar_servicios}
                onClose={closeModal}
            />
        </main>
    );
}

export default Colaboracion;
