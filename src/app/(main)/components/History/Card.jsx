import Image from 'next/image'
import Link from 'next/link'

function Card({ source, par, btn, id }) {
    return (
        <div className='flex flex-col gap-4 snap-center !mb-0 justify-between h-[100%]' role='listItem'>
            <div className='flex flex-col gap-4'>
                <div className='flex w-full h-full aspect-[14/9] overflow-hidden rounded-3xl relative'>
                    <Image src={source} alt='Foto del perrito protagonista' width={700} height={700} className='absolute w-full h-full object-cover' loading="eager" />
                </div>
                <p className='font-normal par-3 text-justify'>
                    {par &&
                        par
                    }
                </p>

            </div>
            <button className='w-fit secondary-btn'>{btn}</button>
        </div>
    )
}

export default Card