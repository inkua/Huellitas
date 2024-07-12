'use client'
import { useState } from 'react'
import Image from 'next/image'
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
            source: 'https://res.cloudinary.com/dorljfo6v/image/upload/v1717957518/huellitas/colaboraciones-comoquierescolaborar-1_do2ctq.png',
            action: () => openModal('donar_dinero'),
        },
        {
            id: 2,
            par: '',
            btn: 'INSUMOS',
            source: 'https://res.cloudinary.com/dorljfo6v/image/upload/v1717957521/huellitas/colaboraciones-comoquierescolaborar-2_koocxt.png',
            action: () => openModal('donar_insumos'),
        },
        {
            id: 3,
            par: '',
            btn: 'SERVICIOS',
            source: 'https://res.cloudinary.com/dorljfo6v/image/upload/v1717957517/huellitas/colaboraciones-comoquierescolaborar-3_kaagfo.png',
            action: () => openModal('donar_servicios'),
        },
    ]
    let itemsColab = [
        {
            id: 1,
            alt:'Logo Artemix',
            source: '/assets/Colaboracion/LogoArtemis.png',
        },
        {
            id: 2,
            alt:'Logo Salitrex',
            source: '/assets/Colaboracion/salitrex1.jpeg',
        },
        {
            id: 3,
            alt:'Logo Salitrex',
            source: '/assets/Colaboracion/salitrex2.jpeg',
        },
        {
            id: 4,
            alt:'Logo Salitrex',
            source: '/assets/Colaboracion/salitrex3.jpeg',
        },
        {
            id: 5,
            alt:'Logo Salitrex',
            source: '/assets/Colaboracion/salitrex4.jpeg',
        },
        {
            id: 6,
            alt:'Logo Salitrex',
            source: '/assets/Colaboracion/salitrex5.jpeg',
        },
        {
            id: 7,
            alt:'Logo Salitrex',
            source: '/assets/Colaboracion/salitrex6.jpeg',
        },
    ]
    const images = [
        
            '/assets/Colaboracion/LogoArtemis.png',
      
            '/assets/Colaboracion/salitrex1.jpeg',
       
            '/assets/Colaboracion/salitrex2.jpeg',
    
            '/assets/Colaboracion/salitrex3.jpeg',
            '/assets/Colaboracion/salitrex4.jpeg',
       
           '/assets/Colaboracion/salitrex5.jpeg',
     
           '/assets/Colaboracion/salitrex6.jpeg',
       
    ]

    return (
        
        <main className='relative'>
            <title>Colaboración</title> 
            <section className='flex flex-col relative w-full h-80 lg:h-[40rem] max-w-screen-2xl mx-auto bg-colab-banner bg-cover  bg-center' role='banner'>
                <div className='flex absolute w-full lg:w-6/12 h-full items-end lg:justify-center p-6 lg:pb-[6rem] '>
                    <div className='flex w-full lg:w-6/12 justify-center lg:justify-start items-end'>
                        <h1 className='font-bold lg:font-semibold heading-1 lg:text-[5.5rem] !text-white'>COLABORACIONES</h1>
                    </div>
                </div>
            </section>

            <section className='flex flex-col w-full max-w-screen-2xl mx-auto justify-center items-center gap-8 py-16 bg-white'>
                <h1 className='w-11/12 lg:w-9/12 font-bold heading-1 text-left'>¿COMO QUIERES COLABORAR?</h1>
                <Slider items={items} type={1} def={2.15} lg={3} md={3}></Slider>
            </section>

            <section className='flex w-full max-w-screen-2xl mx-auto justify-center items-center bg-white lg:justify-start'>
                <div className='flex flex-col w-11/12 lg:w-full gap-8 py-8'>
                    <h1 className='font-bold heading-1 text-center lg:text-left lg:ml-[12rem]'>TIENDAS QUE COLABORAN</h1>       
                    <Slider2 images={images}/>                
                </div>        
            </section>
            <Modal isOpenD={modalVisible.donar_dinero } isOpenI={modalVisible.donar_insumos}  isOpenS={modalVisible.donar_servicios} onClose={closeModal}/>
            
        
        </main>
    )
}

export default Colaboracion
