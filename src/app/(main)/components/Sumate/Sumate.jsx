"use client";
import React, { useState } from 'react';
import { successMessage, errorMessage } from '@/services/notify';

function Sumate() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [subject, setSubject] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setSubject(subject);

        const message = "Estoy interesado(a) en formar parte de Huellitas - "
        const form = e.target;
        if (form.checkValidity()) {
            try {
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, phone, email, subject, comment: `${message} ${subject} :)` }),
                });

                if (response.ok) {
                    successMessage("Correo enviado con éxito!")

                    setEmail('');
                    setName('');
                    setPhone('');
                    setSubject('');
                } else {
                    errorMessage('No se puedo enviar, intente más tarde.')
                }
            } catch (error) {
                errorMessage('No se puedo enviar, intente más tarde.')
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="flex justify-center w-full bg-primaryColor pt-8 md:pt-10 lg:pt-16 xs:bg-sample bg-1 bg-no-repeat bg-right-bottom md:bg-none bg-none">
            <div className="w-full max-w-screen-2xl mx-auto h-full">
                <div className='w-[90%] lg:w-9/12 m-auto md:bg-sample pb-8 md:pb-10 lg:pb-16 bg-2 bg-no-repeat bg-right-bottom lg:bg-4'>
                    <h2 className="heading-1 font-bold !text-white">TÚ TAMBIÉN PUEDES AYUDAR</h2>
                    <div className="flex items-center w-full">
                        <form className="flex-1 mt-4 lg:py-4" onSubmit={(e) => handleSubmit(e)}>
                            <div className="w-full  rounded-lg mb-6  grid  grid-cols-1 grid-rows-1 relative top-3">{/*  */}
                                <input
                                    className="w-8/12 sm:w-6/12 p-2 bg-white rounded-full border border-gray-300 placeholder-gray-500 text-primaryFont par-3 mb-[13px] md:mb-4"
                                    type="text"
                                    placeholder="Nombre completo"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required={true}
                                    minLength="2"
                                />

                                <div className='mb-[13px] md:mb-4 flex flex-col lg:flex-row gap-4'>
                                    <input
                                        className="w-6/12 sm:w-4/12  p-2 bg-white rounded-full border border-gray-300 mr-2 placeholder-gray-500 text-primaryFont par-3"
                                        type="text"
                                        placeholder="Celular"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required={true}
                                        pattern="[0-9\s\+\-\(\)]{10,}"
                                    />

                                    <input
                                        className="w-6/12 sm:w-4/12  p-2 bg-white rounded-full border border-gray-300 mr-2 placeholder-gray-500 text-primaryFont par-3"
                                        type="email"
                                        placeholder="Correo"
                                        pattern="[^\s@]+@[^\s@]+.[^\s@]+"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required={true}
                                    />
                                </div>

                                <div className='md:mt-3 flex flex-col-reverse md:flex-row gap-2 md:gap-5 mt-2'>
                                    <button
                                        className="secondary-btn !text-white !border-white w-fit"
                                        onClick={() => setSubject("Quiero ser voluntario")}
                                        disabled={isSubmitting}
                                    >
                                        QUIERO SER VOLUNTARIO
                                    </button>
                                    <button
                                        className="secondary-btn !text-white !border-white w-fit"
                                        onClick={() => setSubject("Quiero ser padrino")}
                                        disabled={isSubmitting}
                                    >
                                        QUIERO SER PADRINO
                                    </button>
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
