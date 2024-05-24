'use client';

import CRUD from '@/services';
import { useState } from 'react';

function AddPetForm() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null,
    });

    async function handleSubmit(e) {
        e.preventDefault();
        CRUD.createPet(formData);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
            <input
                required
                placeholder="Titulo"
                className="border-2 p-2 rounded-md border-gray-400"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                type="text"
            />
            <textarea
                required
                placeholder="Descripcion"
                className="border-2 p-2 rounded-md border-gray-400 h-48"
                value={formData.description}
                onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                }
                type="text"
            />
            <input
                required
                className="h-8"
                onChange={(e) => setFormData({ ...formData, image: e.target.files })}
                type="file"
            />
            <button
                className="py-2 px-6 rounded-md text-white bg-[#4dbd65]"
                type="submit"
            >
                Crear
            </button>
        </form>
    );
}

export default AddPetForm;
