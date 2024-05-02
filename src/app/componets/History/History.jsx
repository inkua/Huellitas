import Image from 'next/image'
import history_001 from '../../../../public/assets/History/history_001.jpg'
import history_002 from '../../../../public/assets/History/history_002.jpg'
import history_003 from '../../../../public/assets/History/history_003.jpg'

function History() {
    return (
        <section>
            <div className='w-full flex bg-white justify-center items-center py-16 flex-col gap-8'>
                <h1 className='w-11/12 text-center whitespace-nowrap text-black text-3xl font-bold lg:w-9/12 lg:text-left md:text-left'>SIGUE SUS HISTORIAS</h1>
                <div className='w-11/12 grid grid-cols-1 gap-4 lg:w-9/12 lg:grid-cols-3 md:grid-cols-2'>
                    <div className='flex flex-col gap-4'>
                        <Image src={history_001} alt='Foto del perrito protagonista'></Image>
                        <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea cumque ad iure quaerat totam?</p>
                        <button className='w-fit px-4 py-1 border-solid border-2 rounded-2xl border-black text-sm text-black'>SABER MÁS...</button>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <Image src={history_002} alt='Foto del perrito protagonista'></Image>
                        <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea cumque ad iure quaerat totam?</p>
                        <button className='w-fit px-4 py-1 border-solid border-2 rounded-2xl border-black text-sm text-black'>SABER MÁS...</button>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <Image src={history_003} alt='Foto del perrito protagonista'></Image>
                        <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea cumque ad iure quaerat totam?</p>
                        <button className='w-fit px-4 py-1 border-solid border-2 rounded-2xl border-black text-sm text-black'>SABER MÁS...</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default History
