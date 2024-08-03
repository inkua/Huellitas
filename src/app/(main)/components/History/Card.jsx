import Image from 'next/image'

function Card({ source, par, btn }) {
    return (
        <div className='flex flex-col gap-4 snap-center !mb-0 justify-between !h-full' role='listItem'>
            <div className='flex w-full h-full aspect-[16/9] overflow-hidden rounded-3xl relative'>
                <Image src={source} alt='Foto del perrito protagonista' width={700} height={700} className='absolute w-full h-full object-cover' loading="eager" />
            </div>
            <p className='font-normal par-3 text-justify'>
                {par &&
                    par.substring(0, 100) + '...'
                }
            </p>
            <button className='w-fit secondary-btn'>{btn}</button>
        </div>
    )
}

export default Card