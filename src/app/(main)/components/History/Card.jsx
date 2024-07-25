import Image from 'next/image'

function Card({source, par, btn}) {
    return (
        <div className='flex flex-col gap-4 snap-center !mb-0' role='listItem'>
            <Image src={source} alt='Foto del perrito protagonista' width={700} height={700} className='w-full rounded-3xl !mb-0' loading="eager"/>
            <p className='font-normal par-3'>{par}</p>
            <button className='w-fit secondary-btn'>{btn}</button>
        </div>
    )
}

export default Card