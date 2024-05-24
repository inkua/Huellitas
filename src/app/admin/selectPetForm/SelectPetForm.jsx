'use client';

import CRUD from '@/services';
import { useState, useEffect } from 'react';

function SelectPetForm() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getPets();
    }, []);

    async function getPets() {
        setData(await CRUD.getPets());
    }

    return (
        <form className="flex max-w-80 flex-col gap-4">
            <input
                placeholder="Buscar"
                className="border-2 rounded-md border-gray-400 p-2"
                type="search"
            />
            <ul className="border-2 h-48 rounded-md w-full border-gray-400 overflow-y-scroll overflow-x-hidden">
                {data &&
                    data.map((currentPet) => {
                        return <NewPet key={currentPet.id} pet={currentPet} />;
                    })}
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

function NewPet({ pet }) {
    const title = pet.attributes.title.slice(0, 20);
    const description = pet.attributes.description.slice(0, 20);

    return (
        <li className="even:bg-gray-200 p-2">
            <h3>{pet.attributes.title.length <= 20 ? title : title + '...'}</h3>
            <p>
                {pet.attributes.description.length <= 20
                    ? description
                    : description + '...'}
            </p>
        </li>
    );
}

export default SelectPetForm;
