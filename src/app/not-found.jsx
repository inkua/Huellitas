import Link from 'next/link'
import Image from 'next/image'

function NotFound() {
    {
        return (
            <body>
                <main>
                    <section className='w-screen h-screen flex flex-col lg:flex-row max-w-screen-2xl mx-auto'>
                        <div className='flex flex-col w-full lg:w-6/12 h-[35%] lg:h-full justify-center items-center gap-4 lg:bg-primaryFont'>
                            <h1 className='text-6xl md:text-7xl font-bold text-primaryFont lg:text-white'>PÁGINA</h1>
                            <h2 className='text-4xl md:text-5xl font-bold text-primaryFont lg:text-white'>NO ENCONTRADA</h2>
                            <h3 className='text-2xl md:text-3xl font-bold text-primaryFont lg:text-white'>Error 404</h3>
                            <button className='primary-btn !p-3 mt-32 hidden lg:block'><Link href="/">Volver al inicio</Link></button>
                        </div>

                        <div className='flex w-full lg:w-6/12 h-[30%] lg:h-full justify-center items-center'>
                            <Image src='/assets/404/404-dog.png' alt='Foto del perrito protagonista' width={700} height={700} className='w-full h-auto md:w-[60%] lg:w-full' />
                        </div>

                        <div className='flex w-full h-[35%] justify-center items-center lg:hidden'>
                            <button className='primary-btn'><Link href="/">Volver al inicio</Link></button>
                        </div>
                    </section>
                </main>
            </body>
        )
    }
}
export default NotFound