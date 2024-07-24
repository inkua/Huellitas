"use client";
import React, { useState } from 'react';
function Sumate() {
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(true);
  
    const [name, setName] = useState('');
    const [nameValid, setNameValid] = useState(true);
  
    const [phone, setPhone] = useState('');
    const [phoneValid, setPhoneValid] = useState(true);
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };
    
      const validateName = (name) => {
        return name.trim().length > 1;
      };
    
      const validatePhone = (phone) => {
        const regex = /^[0-9\s\+\-\(\)]{7,}$/;
        return regex.test(phone);
      };
    
      const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailValid(validateEmail(value));
      };
    
      const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        setNameValid(validateName(value));
      };
    
      const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(value);
        setPhoneValid(validatePhone(value));
      };
    return (
        <section className="flex justify-center w-full bg-primaryColor pt-8 md:pt-10 lg:pt-16 xs:bg-sample bg-1 bg-no-repeat bg-right-bottom md:bg-none bg-none">

            <div className="w-full max-w-screen-2xl mx-auto h-full" >

                <div className='w-[90%] lg:w-9/12 m-auto md:bg-sample pb-8 md:pb-10 lg:pb-16 bg-2 bg-no-repeat bg-right-bottom lg:bg-4'>
                    <h2 className="heading-1 font-bold !text-white">TÚ TAMBIÉN PUEDES AYUDAR</h2>
                    <div className="flex items-center w-full">

                        <form className="flex-1 mt-4 lg:py-4">
                            <div className="w-full  rounded-lg mb-6  grid  grid-cols-1 grid-rows-1 relative top-3">
                                <div className='mb-4 '>
                                    <input
                                        type="text"
                                        placeholder="Nombre completo"
                                        value={name}
                                        onChange={handleNameChange}
                                        className={`w-8/12 sm:w-6/12 p-2 bg-white rounded-full border ${nameValid ? 'border-gray-300' : 'border-red-500'} placeholder-gray-500 text-primaryFont par-3`}
                                        required
                                        />
                                    {!nameValid && <p className="text-red-500 text-sm md:mt-2">Nombre no válido</p>} 
                                </div>
                            <div className=' mb-[13px] md:mb-4 flex flex-col lg:flex-row gap-4 md:gap-0'>
                                    <div className='w-6/12 sm:w-4/12'>
                                        <input
                                            type="text"
                                            placeholder="Celular"
                                            value={phone}
                                            onChange={handlePhoneChange}
                                            className={`p-2 bg-white rounded-full border ${phoneValid ? 'border-gray-300' : 'border-red-500'} mr-2 md:mr-0 placeholder-gray-500 text-primaryFont par-3`}
                                            required
                                        />
                                        {!phoneValid && <p className="text-red-500 text-sm mt-1 md:mt-2">Número de teléfono no válido</p>}

                                    </div>
                                    <div className='w-6/12 sm:w-4/12 '>
                                        <input
                                            type="text"
                                            placeholder="Correo"
                                            value={email}
                                            onChange={handleEmailChange}
                                            className={` p-2 bg-white rounded-full border ${emailValid ? 'border-gray-300' : 'border-red-500'} mr-2 md:mr-0 placeholder-gray-500 text-primaryFont par-3`}
                                            required
                                        />
                                        {!emailValid && <p className="text-red-500 text-sm mt-1 md:mt-2">Correo electrónico no válido</p>}

                                    </div>
                            </div>  


                                <div className='md:mt-3 flex flex-col-reverse md:flex-row gap-2 md:gap-[2%] mt-2'>
                                    <button className="secondary-btn !text-white !border-white w-fit"> QUIERO SER VOLUNTARIO</button>
                                    <button className="secondary-btn !text-white !border-white w-fit"> QUIERO SER PADRINO</button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Sumate;
