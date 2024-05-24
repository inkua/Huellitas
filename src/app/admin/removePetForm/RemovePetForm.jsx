'use client';

import CRUD from '@/services';
import { useState } from 'react';

function RemovePetForm() {
    return (
        <form className="flex w-80 flex-col gap-4">
            <input
                placeholder="Titulo"
                className="border-2 rounded-md border-gray-400 p-2"
                type="text"
            />
            <ul className="border-2 h-48 rounded-md w-full border-gray-400 overflow-y-scroll overflow-x-hidden">
                <li className=" p-2 flex items-center justify-between">
                    <h3>Titulo</h3>
                    <img className="w-24" src="next.svg" alt="" />
                </li>
                <li className=" p-2 flex items-center justify-between">
                    <h3>Titulo</h3>
                    <img className="w-24" src="next.svg" alt="" />
                </li>
                <li className=" p-2 flex items-center justify-between">
                    <h3>Titulo</h3>
                    <img className="w-24" src="next.svg" alt="" />
                </li>
                <li className=" p-2 flex items-center justify-between">
                    <h3>Titulo</h3>
                    <img className="w-24" src="next.svg" alt="" />
                </li>
                <li className=" p-2 flex items-center justify-between">
                    <h3>Titulo</h3>
                    <img className="w-24" src="next.svg" alt="" />
                </li>
                <li className=" p-2 flex items-center justify-between">
                    <h3>Titulo</h3>
                    <img className="w-24" src="next.svg" alt="" />
                </li>
                <li className=" p-2 flex items-center justify-between">
                    <h3>Titulo</h3>
                    <img className="w-24" src="next.svg" alt="" />
                </li>
                <li className=" p-2 flex items-center justify-between">
                    <h3>Titulo</h3>
                    <img className="w-24" src="next.svg" alt="" />
                </li>
                <li className=" p-2 flex items-center justify-between">
                    <h3>Titulo</h3>
                    <img className="w-24" src="next.svg" alt="" />
                </li>
            </ul>
            <div className="h-8"></div>
            <button
                className="py-2 px-6 rounded-md text-white bg-[#e75c5c]"
                type="submit"
            >
                Eliminar
            </button>
        </form>
    );
}

export default RemovePetForm;
