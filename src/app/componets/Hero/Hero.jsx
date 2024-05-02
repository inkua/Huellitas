import Image from 'next/image'
import banner_img from '../../../../public/assets/Hero/banner-img.jpg'

function Hero() {
    return (
        <section>
            <div className='w-full relative flex flex-col'>
                <div className='w-full h-60 overflow-hidden lg:h-auto'>
                    <Image src={banner_img} className='object-cover object-center h-full lg:w-full lg:h-auto' alt='Banner con imagen de perrito'/>
                </div>

                <div className='w-full flex h-full absolute justify-center items-center py-6 lg:w-6/12 lg:bg-transparent lg:py-0'>
                    <div className='w-full flex flex-col gap-4 justify-center items-center lg:w-2/5 lg:items-start'>
                        <h1 className='text-3xl font-bold'>CONÓCENOS</h1>
                        <p className='text-center text-base lg:text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, dignissimos.</p>
                        <button className='w-fit px-4 py-1 border-solid border-2 rounded-2xl border-white'>SABER MÁS...</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
