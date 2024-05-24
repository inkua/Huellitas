'use client';

import { useState, useEffect } from 'react';

function SelectPetForm() {
    return (
        <form className="flex max-w-80 flex-col gap-4">
            <input
                placeholder="Buscar"
                className="border-2 rounded-md border-gray-400 p-2"
                type="search"
            />
            <ul className="border-2 h-48 rounded-md w-full border-gray-400 overflow-y-scroll overflow-x-hidden">
                <Pet
                    pet={{
                        title: 'Titulo de mascota muy largo',
                        description:
                            'Érase una vez en un pequeño pueblo costero, donde el sol siempre parecía brillar más intensamente y las olas del mar susurraban secretos antiguos a la orilla, vivía una joven llamada Elena. ',
                    }}
                />
                <Pet
                    pet={{
                        title: 'Titulo de mascota',
                        description:
                            'Érase una vez en un pequeño pueblo costero, donde el sol siempre parecía brillar más intensamente y las olas del mar susurraban secretos antiguos a la orilla, vivía una joven llamada Elena. ',
                    }}
                />
            </ul>
            <div className="h-8"></div>
            <div className="flex items-center justify-center gap-8">
                <button
                    className="py-2 w-36 text-center rounded-md text-white bg-[#5c91e7]"
                    type="submit"
                >
                    Modificar
                </button>
                <button
                    className="py-2 w-36 rounded-md text-white bg-[#e75c5c]"
                    type="submit"
                >
                    Eliminar
                </button>
            </div>
        </form>
    );
}

function Pet({ pet }) {
    const title = pet.title.slice(0, 20);
    const description =
        pet.description.slice(0, 20) + '\n' + pet.description.slice(20, 40);

    return (
        <li>
            <h3>{pet.title.length <= 20 ? title : title + '...'}</h3>
            <p>{pet.description.length >}</p>
        </li>
    );
}

export default SelectPetForm;
