
function map(){
    return(
        <div className='w-full bg-tertiaryColor max-w-screen-2xl mx-auto h-120 grid grid-cols-1 gap-6 content-center'>
            <div className='w-10/12 h-2/5  max-w-screen-2xl relative mx-16 mt-8'>
                <iframe className='w-4/5 h-[400px] rounded-lg content-center' width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Cartagena,%20Colombia+(Huellitas)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>

            <div className='w-4/5  max-w-screen-2xl relative ml-24 mb-6 grid grid-cols-1 gap-0 content-center'>

                <div className='w-1/2 content-left mt-12 border-t-2 border-black'>
                    <h1 className='text-2xl text-primaryFont text-h1-w font-bold'>TELÉFONO</h1>
                    <p className='text-primaryFont'>0000-0000</p>
                </div>
                <div className='w-1/2 content-left mt-12 border-t-2  border-black'>
                    <h1 className='text-2xl text-primaryFont font-bold'>CONSULTAS</h1>
                    <p className='text-primaryFont'>huellitascartagena@gmail.com</p>
                </div>
                <div className='w-1/2 content-left mt-12 border-b-2 border-t-2  border-black'>
                    <h1 className='text-2xl  text-primaryFont font-bold' >DIRECCIÓN</h1>
                    <p className='text-primaryFont '>Av Cabildo 2578 , esq. Pedro Borra</p> 
                </div>

            </div>

        </div>
        

        
    )

}

export default map