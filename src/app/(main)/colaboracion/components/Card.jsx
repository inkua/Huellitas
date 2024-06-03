import Image from "next/image"

function Card({source, btn_txt}){
    return (
        <div role="listItem">
            <div className="flex flex-col gap-4 items-center lg:gap-8">
                <div className='w-full overflow-hidden'>
                    <Image src={source} alt='Foto del perrito' width={100} height={100} className='flex w-full' />
                </div>
                <button type="button" className="w-full primary-btn">{btn_txt}</button>
            </div>
        </div>
    )
}

export default Card