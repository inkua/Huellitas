"use client";

import { useState } from 'react';

import { successMessage, errorMessage } from '@/services/notify'

function Map() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const subject = 'Consulta';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target;
        if (form.checkValidity()) {
            try {
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, phone, email, comment, subject }),
                });

                if (response.ok) {
                    successMessage("Correo enviado con éxito!")

                    setEmail('');
                    setName('');
                    setPhone('');
                    setComment('');
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
        <div className='w-full bg-tertiaryColor shadow-[0_6px_6px_-2px_rgba(0,0,0,0.3)]'>
            <div className="w-full h-full mx-auto max-w-screen-2xl flex justify-center lg:shadow-none">
                <div className='w-full md:w-[90%] lg:w-[75%] flex flex-col md:flex-row justify-center items-center md:items-start gap-10 lg:gap-16 py-6 md:py-8 lg:py-10'>
                    <div className='w-[90%] lg:w-[50%]'>
                        <div className='flex flex-col'>
                            <div>
                                <h1 className='heading-2 mb-1'>¿DÓNDE ESTAMOS?</h1>
                                <p className='par-3 mb-4'>Cartagena de Indias, Colombia</p>
                            </div>
                            <iframe className='w-full lg:w-[85%] aspect-[14/9] md:aspect-square h-auto' width="400" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Cartagena,%20Colombia+(Huellitas)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </div>

                    <div className="w-[90%] lg:w-[50%]">
                        <h2 className='heading-2 mb-4'>¿TIENES ALGUNA CONSULTA?</h2>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-6 lg:gap-4'>
                            <div>
                                <label htmlFor="first_name" className="hidden lg:block mb-2 par-3 !font-light">Nombre</label>
                                <input
                                    type="text"
                                    id="first_name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="bg-gray-50 border-2 par-3 rounded-lg block w-full p-2"
                                    placeholder="Nombre y Apellido"
                                    required
                                    minLength="2"
                                />
                            </div>

                            <div>
                                <label htmlFor="PhoneNumber" className="hidden lg:block mb-2 par-3 !font-light">Número de teléfono</label>
                                <input
                                    type="text"
                                    id="PhoneNumber"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="bg-gray-50 border-2 par-3 rounded-lg block w-full p-2"
                                    placeholder="Teléfono"
                                    required
                                    pattern="[0-9\s\+\-\(\)]{10,}"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="hidden lg:block mb-2 par-3 !font-light">Correo electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-50 border-2 par-3 rounded-lg block w-full p-2"
                                    placeholder="Correo electrónico"
                                    pattern="[^\s@]+@[^\s@]+.[^\s@]+"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="consulta" className="hidden lg:block mb-2 par-3 !font-light">Déjanos tu consulta</label>
                                <textarea
                                    id="consulta"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    className="bg-gray-50 border-2 par-3 h-40 shadow-xs resize-none leading-relaxed rounded-lg block w-full p-2"
                                    placeholder="Déjanos aquí tu consulta"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="primary-btn w-fit"
                                disabled={isSubmitting}
                            >
                                Enviar consulta
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;
