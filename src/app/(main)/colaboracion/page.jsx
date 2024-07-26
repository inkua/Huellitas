'use client'
import { useState } from 'react'
import Modal from './components/Modal'
import Slider from '../components/Slider/Slider'
import Slider2 from '../components/Slider/slider2'



function Colaboracion() {
    const [modalVisible, setModalVisible] = useState({
        donar_dinero: false,
        donar_insumos: false,
        donar_servicios: false
    });

    const openModal = (modalType) => {
        setModalVisible(prevState => ({
            ...prevState,
            [modalType]: true
        }));
    };

    const closeModal = () => {
        setModalVisible({
            donar_dinero: false,
            donar_insumos: false,
            donar_servicios: false
        });
    };

    let items = [
        {
            id: 1,
            par: '',
            btn: 'ECONÓMICAS',
            alt: 'donación economica',
            source: 'https://res.cloudinary.com/dorljfo6v/image/upload/v1717957518/huellitas/colaboraciones-comoquierescolaborar-1_do2ctq.png',
            action: () => openModal('donar_dinero'),
        },
        {
            id: 2,
            par: '',
            btn: 'INSUMOS',
            alt: 'donación insumos',
            source: 'https://res.cloudinary.com/dorljfo6v/image/upload/v1717957521/huellitas/colaboraciones-comoquierescolaborar-2_koocxt.png',
            action: () => openModal('donar_insumos'),
        },
        {
            id: 3,
            par: '',
            btn: 'SERVICIOS',
            alt: 'donación servicios',
            source: 'https://res.cloudinary.com/dorljfo6v/image/upload/v1717957517/huellitas/colaboraciones-comoquierescolaborar-3_kaagfo.png',
            action: () => openModal('donar_servicios'),
        },
    ]
    let itemsColab = [
        {
            id: 0,
            alt: 'Logo Artemix',
            source: '/assets/Colaboracion/LogoArtemis.png',
        },

        {
            id: 1,
            alt: 'Logo Salitrex',
            source: '/assets/Colaboracion/salitrex.jpeg',
        },
        {
            id: 2,
            alt: 'Logo Artemix',
            source: '/assets/Colaboracion/LogoArtemis.png',
        },

        {
            id: 3,
            alt: 'Logo Salitrex',
            source: '/assets/Colaboracion/salitrex.jpeg',
        },
        {
            id: 4,
            alt: 'Logo Artemix',
            source: '/assets/Colaboracion/LogoArtemis.png',
        },

        {
            id: 5,
            alt: 'Logo Salitrex',
            source: '/assets/Colaboracion/salitrex.jpeg',
        },


    ]


    return (

        <main className='relative'>
            <title>Colaboración</title>
            <section className='flex flex-col relative w-full h-80 lg:h-96 max-w-screen-2xl mx-auto bg-colab-banner bg-cover bg-center' role='banner'>
                <div className='flex absolute w-full lg:w-6/12 h-full items-end lg:justify-center p-6 '>
                    <div className='flex w-full lg:w-6/12 justify-center lg:justify-start items-end'>
                        <h1 className='font-bold lg:font-semibold heading-1 lg:text-[3em] !text-white'>COLABORACIONES</h1>
                    </div>
                </div>
            </section>

            <section className='flex flex-col w-full max-w-screen-2xl mx-auto justify-center items-center gap-8 py-16 bg-white'>
                <h1 className='w-11/12 lg:w-9/12 lg:font-bold heading-1 lg:text-left font-semibold text-h1-m'>¿COMO QUIERES COLABORAR?</h1>
                <Slider items={items} type={1} def={2.15} lg={3} md={3}></Slider>
            </section>

            <section className='flex w-full max-w-screen-2xl mx-auto justify-center items-center bg-white lg:justify-start lg:mb-28'>
                <div className='flex flex-col w-11/12 lg:w-full gap-8 py-8'>
                    <h1 className='font-bold heading-1 text-center lg:text-left lg:ml-[12rem]'>TIENDAS QUE COLABORAN</h1>
                    <Slider2 items={itemsColab} type={0} def={2.15} lg={3} md={3} ></Slider2>

                </div>
            </section>
            <Modal isOpenD={modalVisible.donar_dinero} isOpenI={modalVisible.donar_insumos} isOpenS={modalVisible.donar_servicios} onClose={closeModal} />


        </main>
    )
}

export default Colaboracion
