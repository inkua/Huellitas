import Image from 'next/image'

function History() {
    return (
        <main>
            <section className='flex flex-col w-full max-w-screen-2xl mx-auto justify-center items-center gap-8 py-16 bg-white'>
                <h1 className='w-11/12 lg:w-9/12 font-bold heading-1 text-left'>SIGUE SUS HISTORIAS</h1>
                <div className='grid overflow-x-scroll grid-cols-[repeat(3,90%)] lg:grid-cols-3 w-full lg:w-9/12 px-4 lg:px-0 snap-mandatory snap-x no-scrollbar gap-4' role='list'>
                    
                    <div className='flex flex-col gap-4 snap-center' role='listItem'>
                        <Image src={'/assets/History/history_001.jpg'} alt='Foto del perrito protagonista' width={100} height={100} className='w-full rounded-3xl'/>
                        <p className='font-normal par-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea cumque ad iure quaerat totam?</p>
                        <button className='w-fit secondary-btn'>SABER MÁS...</button>
                    </div>

                    <div className='flex flex-col gap-4 snap-center' role='listItem'>
                        <Image src={'/assets/History/history_002.jpg'} alt='Foto del perrito protagonista' width={100} height={100} className='w-full rounded-3xl'/>
                        <p className='font-normal par-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea cumque ad iure quaerat totam?</p>
                        <button className='w-fit secondary-btn'>SABER MÁS...</button>
                    </div>

                    <div className='flex flex-col gap-4 snap-center' role='listItem'>
                        <Image src={'/assets/History/history_003.jpg'} alt='Foto del perrito protagonista' width={100} height={100} className='w-full rounded-3xl'/>
                        <p className='font-normal par-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea cumque ad iure quaerat totam?</p>
                        <button className='w-fit secondary-btn'>SABER MÁS...</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default History
