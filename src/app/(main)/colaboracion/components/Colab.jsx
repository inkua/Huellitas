import Image from "next/image"

function Colab({source, alt }){
    return (
        <div role="listItem">
            <div className="flex flex-col gap-4 items-center lg:gap-2 ">
                <div className='w-full overflow-auto'>
                    <Image src={source} alt={alt} width={700} height={700} className='flex w-full' />
                </div>
            </div>
        </div>
    )
}

export default Colab