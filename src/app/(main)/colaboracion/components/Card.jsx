import Image from "next/image"

function Card({source, btn_txt, onButtonClick }){
    return (
        <div role="listItem">
            <div className="flex flex-col gap-4 items-center lg:gap-8">
                <div className='w-full overflow-hidden'>
                    <Image src={source} alt='Foto del perrito' width={700} height={700} className='flex w-full' />
                </div>
                <button type="button" className="w-full primary-btn" onClick={onButtonClick}>{btn_txt}</button>
            </div>
        </div>
    )
}

export default Card