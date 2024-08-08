"use client";
import React, { useState } from 'react';

function Sumate() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // State to track if the form is submitting
    const [subject, setSubject] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true); // Disable buttons
        setSubject(subject);

        const form = e.target;
        if (form.checkValidity()) {
            try {
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, phone, email, subject }),
                });

                if (response.ok) {
                    console.log('Email sent successfully');
                    alert('Solicitud enviada con éxito!');
                    setEmail('');
                    setName('');
                    setPhone('');
                    setSubject('');
                } else {
                    console.log('Failed to send email');
                    alert('Error al enviar la solicitud.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error al enviar la solicitud.');
            } finally {
                setIsSubmitting(false); // Re-enable buttons
            }
        } else {
            console.log('Form has errors');
            setIsSubmitting(false); // Re-enable buttons if the form has errors
        }
    };

    return (
        <section className="flex justify-center w-full bg-primaryColor pt-8 md:pt-10 lg:pt-16 xs:bg-sample bg-1 bg-no-repeat bg-right-bottom md:bg-none bg-none">
            <div className="w-full max-w-screen-2xl mx-auto h-full">
                <div className='w-[90%] lg:w-9/12 m-auto md:bg-sample pb-8 md:pb-10 lg:pb-16 bg-2 bg-no-repeat bg-right-bottom lg:bg-4'>
                    <h2 className="heading-1 font-bold !text-white">TÚ TAMBIÉN PUEDES AYUDAR</h2>
                    <div className="flex items-center w-full">
                        <form className="flex-1 mt-4 lg:py-4" onSubmit={(e) => handleSubmit(e)}>
                            <div className="w-full rounded-lg mb-6 grid grid-cols-1 grid-rows-1 relative top-3">
                                <div className='mb-4'>
                                    <input
                                        type="text"
                                        placeholder="Nombre completo"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-8/12 sm:w-6/12 p-2 bg-white rounded-full border placeholder-gray-500 text-primaryFont par-3"
                                        required={true}
                                        minLength="2"
                                    />
                                </div>
                                <div className='mb-[13px] md:mb-4 flex flex-col lg:flex-row gap-4 md:gap-0'>
                                    <div className='w-6/12 sm:w-4/12'>
                                        <input
                                            type="text"
                                            placeholder="Celular"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="p-2 bg-white rounded-full border 'border-gray-300' mr-2 md:mr-0 placeholder-gray-500 text-primaryFont par-3"
                                            required={true}
                                            pattern="[0-9\s\+\-\(\)]{10,}"
                                        />
                                    </div>
                                    <div className='w-6/12 sm:w-4/12'>
                                        <input
                                            type="email"
                                            placeholder="Correo"
                                            pattern="[^\s@]+@[^\s@]+.[^\s@]+"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="p-2 bg-white rounded-full border 'border-gray-300' mr-2 md:mr-0 placeholder-gray-500 text-primaryFont par-3"
                                            required={true}
                                        />
                                    </div>
                                </div>
                                <div className='md:mt-3 flex flex-col-reverse md:flex-row gap-2 md:gap-[2%] mt-2'>
                                    <button
                                        onClick={() => setSubject("Quiero ser voluntario")}
                                        className="secondary-btn !text-white !border-white w-fit"
                                        disabled={isSubmitting} // Disable if submitting
                                    >
                                        QUIERO SER VOLUNTARIO
                                    </button>
                                    <button
                                        onClick={() => setSubject("Quiero ser padrino")}
                                        className="secondary-btn !text-white !border-white w-fit"
                                        disabled={isSubmitting} // Disable if submitting
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
