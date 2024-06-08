import Image from 'next/image'

function Card({source, par, btn}) {
    return (
        <div className='flex flex-col gap-4 snap-center' role='listItem'>
            <Image src={source} alt='Foto del perrito protagonista' width={100} height={100} className='w-full rounded-3xl'/>
            <p className='font-normal par-3'>{par}</p>
            <button className='w-fit secondary-btn'>{btn}</button>
        </div>
    )
}

export default Card