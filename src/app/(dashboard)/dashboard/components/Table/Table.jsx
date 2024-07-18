"use client";

import { useState, useEffect } from "react";
import ModalAdd from "./Modals/ModalAdd";
import ModalMod from "./Modals/ModalMod";

function Table({ data, refreshCallback, config }) {
    const [isModalAddActive, setIsModalAddActive] = useState(false);
    const [isModalModActive, setIsModalModActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [token, setToken] = useState("");

    useEffect(() => {
        if (localStorage.getItem("jwt")) {
            setToken(localStorage.getItem("jwt"));
        } else {
            setToken(sessionStorage.getItem("jwt"));
        }
    }, []);

    function handleModify(item) {
        setIsModalModActive(true);
        setSelectedItem(item);
    }

    function handleCreate() {
        setIsModalAddActive(true);
    }

    function handleModalModClose() {
        setIsModalModActive(false);
        setSelectedItem(null);
        refreshCallback(Date.now());
    }

    function handleModalAddClose() {
        setIsModalAddActive(false);
        refreshCallback(Date.now());
    }

    async function handleRemove(item) {
        await fetch("/api/" + config.collection, {
            method: "DELETE",
            body: JSON.stringify({
                token: token,
                item: item,
            }),
        });
        refreshCallback(Date.now());
    }

    return (
        <>
            <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs h-14 text-tertiaryColor bg-primaryColor">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descripción
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Imagen
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Editar</span>
                            </th>
                        </tr>
                    </thead>
                    {data &&
                    <tbody className="">
                        {data?.map((item) => {
                            return (
                                <tr
                                    key={item.id}
                                    className="bg-white border-b odd:bg-[#6C5CE706]"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        {item.data.nombre}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.data.descripcion}
                                    </td>
                                    <td className="px-6 min-w-[10rem] py-2">
                                        <img
                                            className="h-24"
                                            src={item.data.imagen}
                                            alt="Imagen de un perrito"
                                        />
                                    </td>
                                    <td className="px-6 py-4 text-right min-w-[15rem]">
                                        <button
                                            onClick={() => handleModify(item)}
                                            className="font-medium mr-10 text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Modificar
                                        </button>
                                        <button
                                            onClick={() => handleRemove(item)}
                                            className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    }
                </table>

                {isModalModActive && (
                    <ModalMod
                        item={selectedItem}
                        closeCallback={handleModalModClose}
                        token={token}
                        config={config}
                    />
                )}

                {isModalAddActive && (
                    <ModalAdd
                        closeCallback={handleModalAddClose}
                        token={token}
                        config={config}
                    />
                )}
            </div>
            <button
                onClick={handleCreate}
                type="button"
                className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                Añadir
            </button>
        </>
    );
}

export default Table;
