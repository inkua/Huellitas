"use client";

import { useState } from 'react';


function map(){
    const [email, setEmail] = useState('');

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        const form = e.target;
        if (form.checkValidity()) {
            console.log('Form submitted');
        } else {
            console.log('Form has errors');
        }
    };



    return(
        <div className='w-full bg-tertiaryColor h-fit  drop-shadow-2xl'>
            <div className="w-full h-full mx-auto max-w-screen-2xl grid grid-cols-1 gap-6 content-start  lg:grid-cols-2 lg:gap-0 lg:mb-2 shadow-2xl lg:shadow-none">          
                <div className='w-full  max-w-screen-2xl '>
                    <div className='grid grid-cols-1 ml-[10%]'>
                        <div>
                            <h1 className='text-2xl text-primaryFont text-h2-m font-bold mt-6 lg:mt-12'>¿DÓNE ESTAMOS?</h1>
                            <p className='text-primaryFont mb-6 text-p3-m'>Av Cabildo 2578 , esq. Pedro Borra</p>
                        </div>
                        <iframe className='lg:w-[90%] w-[90%] h-[300px] lg:h-[400px] ' width="400" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Cartagena,%20Colombia+(Huellitas)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        <div className="justify-start w-full">
                            <h1 className='text-2xl text-primaryFont font-bold mt-6 lg:mt-12 text-h2-m'>TELÉFONO</h1>
                            <p className='text-primaryFont mb-6 text-p3-m'>0000-0000</p>
                        </div>
                    </div>
                </div>
            <div className="px-[10%]">
                <h1 className='text-primaryFont text-h2-m mb-4 font-bold mt-6  mb:text-2xl text-base lg:mt-12'>¿Tienes alguna consulta?</h1>
                <div className='grid grid-cols-1 mb-12 w-full gap-y-3'>    
        <form  onSubmit={handleSubmit}>
        <div>
                <label htmlFor="first_name" className="hidden lg:block mb-2 text-base font-medium text-gray-900">Nombre</label>
                <input
                    type="text"
                    id="first_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`bg-gray-50 border-2  text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                    placeholder="Nombre y Apellido"
                    required = {true}
                    minLength="2"
                />
                </div>

            <div>
                <label htmlFor="PhoneNumber" className="hidden lg:block mb-2 text-base font-medium text-gray-900">Número de teléfono</label>
                <input
                    type="text"
                    id="PhoneNumber"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`bg-gray-50 border-2  text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                    placeholder="Teléfono"
                    required = {true}
                    pattern="[0-9\s\+\-\(\)]{10,}"
                />
            </div>
            
            <div>
                <label htmlFor="email" className="hidden lg:block mb-2 text-base font-medium text-gray-900">Correo electrónico</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`bg-gray-50 border-2 text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                    placeholder="Correo electrónico"
                    pattern="[^\s@]+@[^\s@]+.[^\s@]+"
                    required = {true}
                />
            </div>
            <div>
                <label htmlFor="consulta" className="hidden lg:block mb-2 text-base font-medium text-gray-900">Déjanos tu consulta</label>
                <textarea
                    id="consulta"
                    className="bg-gray-50 border-2 border-gray-300 text-gray-900 h-40 px-4 py-2 font-normal shadow-xs resize-none leading-relaxed text-sm rounded-lg block w-full p-2.5"
                    placeholder="Déjanos aquí tu consulta"
                    required
                ></textarea>
            </div>
            <button type="submit"  className="bg-primaryColor text-white font-semibold rounded-lg p-2.5 lg:p-2 w-full lg:w-[40%] mt-4 uppercase primary-btn"> Enviar consulta</button>
        </form>
        </div>
            </div>
            
            </div>
            
            <div className="bg-whitegrid grid-cols-1 gap-0 content-end bg-white pb-[32px] md:pb-[82px] pt-[36px] mb:pt-[75px]">
                    <p className='text-primaryFont mb-[23px] md:mb-[8px] text-p3-m justify-end text-center'>Para llegar a más personas y poder seguir ayudando</p>
                    <h1 className='text-2xl text-primaryFont font-bold text-h2-m text-center px-4 mb-[23px]'>¡NO TE OLVIDES DE SEGUIRNOS EN NUESTRAS REDES!</h1>

                    <div className="flex justify-center">
                        <div className="flex flex-col md:flex-row md:justify-center w-[80%] gap-2 md:mt-[23px]">
                            <div className="flex items-center justify-left px-4">
                                <div className="bg-ig-mobile bg-no-repeat bg-contain w-[24px] h-[24px] md:w-[35px] md:h-[35px]"></div>
                                <a className=" text-grayFont mb-1 text-p3-m ml-2 mt-1 lg:ml-5 text-xs md:text-base" href="https://www.instagram.com/huellitas.ctgna/" target="_blank" rel="noreferrer">@huellitas.ctgna</a>
                            </div>
                            <div className="flex items-center justify-left px-4">
                                <div className="bg-tk-mobile bg-no-repeat bg-contain w-[24px] h-[24px] md:w-[35px] md:h-[35px]"></div>
                                <a className=" text-grayFont mb-1 text-p3-m ml-2 mt-1 lg:ml-5 text-xs md:text-base" href="https://www.tiktok.com/@huellitascartagena" target="_blank" rel="noreferrer" >@huellitascartagena</a>
                            </div>
                        </div>
                    </div>
                
                
            </div>
                

        </div>

    )

}

export default map

