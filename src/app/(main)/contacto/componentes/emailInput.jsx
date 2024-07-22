import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const EmailInput = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email" className="hidden lg:block mb-2 text-base font-medium text-gray-900">Correo electrónico</label>
                <input
                    type="text"
                    id="email"
                    className={`bg-gray-50 border-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                    placeholder="Correo electrónico"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Enter a valid email'
                        }
                    })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">Submit</button>
            </form>
        </div>
    );
};

export default EmailInput;
