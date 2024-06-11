'use client'
import { useState } from 'react'
import Image from 'next/image'
import Modal from './components/Modal'
import Slider from '../components/Slider/Slider'

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
            btn: 'DONAR DINERO',
            source: 'https://res.cloudinary.com/dorljfo6v/image/upload/v1717957518/huellitas/colaboraciones-comoquierescolaborar-1_do2ctq.png',
            action: () => openModal('donar_dinero'),
        },
        {
            id: 2,
            par: '',
            btn: 'DONAR INSUMOS',
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

    return (
        <main className='relative'>
            <section className='flex flex-col relative w-full h-80 lg:h-96 max-w-screen-2xl mx-auto bg-colab-banner bg-cover bg-center' role='banner'>
                <div className='flex absolute w-full lg:w-6/12 h-full items-end lg:justify-center p-6'>
                    <div className='flex w-full lg:w-2/5 justify-center lg:justify-start items-end'>
                        <h1 className='font-bold heading-1 !text-white'>COLABORACIONES</h1>
                    </div>
                </div>
            </section>

            <section className='flex flex-col w-full max-w-screen-2xl mx-auto justify-center items-center gap-8 py-16 bg-white'>
                <h1 className='w-11/12 lg:w-9/12 font-bold heading-1 text-left'>¿COMO QUIERES COLABORAR?</h1>
                <Slider items={items} type={1} def={2.15} lg={3} md={3}></Slider>
            </section>

            <section className='flex w-full max-w-screen-2xl mx-auto justify-center items-center bg-white'>
                <div className='flex flex-col w-11/12 lg:w-9/12 gap-8 py-8'>
                    <h1 className='font-bold heading-1 text-left'>TIENDAS QUE COLABORAN</h1>
                    <p className='block lg:hidden font-medium par-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt labore minima modi quos reprehenderit delectus molestias dolor laborum impedit a?</p>
                    <div className='grid overflow-x-scroll grid-cols-2 lg:grid-cols-4 md:grid-cols-2 px-12 lg:px-0 snap-mandatory snap-x no-scrollbar gap-8' role='list'>
                        <Image src={'/assets/Colaboracion/logo_001.png'} alt='Logo Tailwind' width={100} height={100} className='w-full' role='listItem' />
                        <Image src={'/assets/Colaboracion/logo_002.png'} alt='Logo Next' width={100} height={100} className='w-full' role='listItem' />
                        <Image src={'/assets/Colaboracion/logo_001.png'} alt='Logo Tailwind' width={100} height={100} className='w-full' role='listItem' />
                        <Image src={'/assets/Colaboracion/logo_002.png'} alt='Logo Next' width={100} height={100} className='w-full' role='listItem' />
                    </div>
                </div>        
            </section>

                <Modal isOpenD={modalVisible.donar_dinero } isOpenI={modalVisible.donar_insumos}  isOpenS={modalVisible.donar_servicios} onClose={closeModal}/>
        
        </main>
    )
}

export default Colaboracion
