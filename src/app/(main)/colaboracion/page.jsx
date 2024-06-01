import Card from './components/Card'
import Image from 'next/image'

function Colaboracion() {
    return (
        <main>
            <section className='flex flex-col relative w-full h-80 lg:h-96 max-w-screen-2xl mx-auto bg-colab-banner bg-cover bg-center' role='banner'>
                <div className='flex absolute w-full lg:w-6/12 h-full items-end lg:justify-center p-6'>
                    <div className='flex w-full lg:w-2/5 justify-center lg:justify-start items-end'>
                        <h1 className='font-bold heading-1 !text-white'>COLABORACIONES</h1>
                    </div>
                </div>
            </section>

            <section className='flex flex-col w-full max-w-screen-2xl mx-auto justify-center items-center gap-8 py-16 bg-white'>
                <h1 className='w-11/12 lg:w-9/12 font-bold heading-1 text-left'>¿COMO QUIERES COLABORAR?</h1>
                <div className='grid overflow-x-scroll grid-cols-[repeat(3,45%)] lg:grid-cols-3 w-full lg:w-9/12 px-4 lg:px-0 snap-mandatory snap-x no-scrollbar gap-4' role='list'>
                    <Card source={'/assets/Colaboracion/colaboracion_001.jpg'} btn_txt={'DONAR DINERO'}/>
                    <Card source={'/assets/Colaboracion/colaboracion_002.jpg'} btn_txt={'DONAR INSUMOS'}/>
                    <Card source={'/assets/Colaboracion/colaboracion_003.jpg'} btn_txt={'DONAR SERVICIOS'}/>
                </div>
            </section>

            <section className='flex w-full max-w-screen-2xl mx-auto justify-center items-center bg-white'>
                <div className='flex flex-col w-11/12 lg:w-9/12 gap-8 py-8'>
                    <h1 className='font-bold heading-1 text-left'>TIENDAS QUE COLABORAN</h1>
                    <p className='block lg:hidden font-medium par-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt labore minima modi quos reprehenderit delectus molestias dolor laborum impedit a?</p>
                    <div className='grid overflow-x-scroll grid-cols-1 lg:grid-cols-4 md:grid-cols-2 px-12 lg:px-0 snap-mandatory snap-x no-scrollbar gap-8' role='list'>
                        <Image src={'/assets/Colaboracion/logo_001.png'} alt='Logo Tailwind' width={100} height={100} className='w-full' role='listItem'/>
                        <Image src={'/assets/Colaboracion/logo_002.png'} alt='Logo Next' width={100} height={100} className='w-full' role='listItem'/>
                        <Image src={'/assets/Colaboracion/logo_001.png'} alt='Logo Tailwind' width={100} height={100} className='w-full' role='listItem'/>
                        <Image src={'/assets/Colaboracion/logo_002.png'} alt='Logo Next' width={100} height={100} className='w-full' role='listItem'/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Colaboracion