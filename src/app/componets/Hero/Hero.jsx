function Hero() {
    return (
        <section>
            <div className='flex flex-col relative w-full h-80 lg:h-96 max-w-screen-2xl mx-auto bg-hero-banner-sm lg:bg-hero-banner-lg bg-cover'>
                <div className='flex absolute w-full lg:w-6/12 h-full items-end lg:justify-center lg:items-center p-6 lg:py-0 lg:bg-transparent'>
                    <div className='flex flex-col w-full lg:w-2/5 gap-4 lg:items-start'>
                        <h1 className='font-bold heading-1 !text-white'>CONÓCENOS</h1>
                        <p className='hidden lg:block font-medium par-3 !text-white text-center lg:text-left md:text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, dignissimos.</p>
                        <button className='w-fit px-4 py-1 border-solid border-2 border-white rounded-2xl'>SABER MÁS...</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
