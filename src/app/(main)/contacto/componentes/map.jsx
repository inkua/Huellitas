
function map(){
    return(
        <div className='w-full bg-tertiaryColor h-full  lg:h-[600px]'>
            <div className="w-full  max-w-screen-2xl mx-auto  grid grid-cols-1 gap-6 content-center lg:grid-cols-2 lg:gap-0  lg:flex lg:h-full">          
                <div className='lg:flex lg:justify-end lg:w-full  w-10/12 h-2/5  max-w-screen-2xl relative mx-16 mt-8 lg:mb-12  lg:ml-8 lg:h-fit'>
                    <iframe className='lg:w-4/5  w-4/5 h-[350px] lg:h-[500px] rounded-2xl lg:rounded-none content-center' width="100%" height="600" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Cartagena,%20Colombia+(Huellitas)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>

                <div className='w-4/5 max-w-screen-2xl relative ml-24 lg:ml-0 mb-6 grid grid-cols-1 gap-0 content-center lg:content-normal lg:mt-24 lg:h-4/6'>

                    <div className='w-1/2 content-left border-t border-black '>
                        <h1 className='text-2xl text-primaryFont text-h1-w font-bold mt-6 lg:mt-12'>TELÉFONO</h1>
                        <p className='text-primaryFont mb-6'>0000-0000</p>
                    </div>
                    <div className='w-1/2 content-left  border-t  border-black'>
                        <h1 className='text-2xl text-primaryFont font-bold mt-6 lg:mt-12'>CONSULTAS</h1>
                        <p className='text-primaryFont mb-6'>huellitascartagena@gmail.com</p>
                    </div>
                    <div className='w-1/2 content-left border-b border-t  border-black'>
                        <h1 className='text-2xl  text-primaryFont font-bold mt-6 lg:mt-12'>DIRECCIÓN</h1>
                        <p className='text-primaryFont mb-6'>Av Cabildo 2578 , esq. Pedro Borra</p> 
                    </div>

                </div>
            </div>

        </div>

    )

}

export default map