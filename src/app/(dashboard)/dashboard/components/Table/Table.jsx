"use client";

import { useState } from "react";
import ModalAdd from "./Modals/ModalAdd";
import ModalMod from "./Modals/ModalMod";

function Table({ data, refreshCallback, config }) {
    const [isModalAddActive, setIsModalAddActive] = useState(false);
    const [isModalModActive, setIsModalModActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

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
                token: "",
                item: item,
            }),
        });
        refreshCallback(Date.now());
    }

    return (
        <>
            <div className="relative overflow-x-auto pb-10">
                <button
                    onClick={handleCreate}
                    type="button"
                    className="bg-primaryColor px-4 py-2 rounded-md my-4"
                >
                    Añadir
                </button>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs md:text-ms h-14 text-tertiaryColor bg-primaryColor">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            {config.collection != "sponsors" &&
                                (config.collection == "admins" ? (
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                ) : (
                                    <th scope="col" className="px-6 py-3">
                                        Descripción
                                    </th>
                                ))}
                            {config.collection != "admins" && (
                                <th scope="col" className="px-6 py-3">
                                    Imagen
                                </th>
                            )}
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Editar</span>
                            </th>
                        </tr>
                    </thead>
                    {data && (
                        <tbody className="">
                            {data?.map((item) => {
                                return (
                                    <tr
                                        key={item.id}
                                        className="bg-white border-b h-32 odd:bg-[#6c5ce71d]"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            {item.data.nombre}
                                        </th>
                                        {config.collection != "sponsors" &&
                                            (config.collection == "admins" ? (
                                                <td className="flex items-center whitespace-nowrap px-6 py-4 h-32 max-w-60 overflow-scroll">
                                                    {item.data.email}
                                                </td>
                                            ) : (
                                                <td className="flex items-center whitespace-nowrap px-6 py-4 h-32 max-w-60 overflow-scroll">
                                                    {item.data.descripcion}
                                                </td>
                                            ))}

                                        {config.collection != "admins" && (
                                            <td className="px-6 min-w-[10rem] py-2">
                                                <img
                                                    className="h-24"
                                                    src={item.data.imagen}
                                                    alt="Imagen de un perrito"
                                                />
                                            </td>
                                        )}
                                        <td className="px-6 py-4 text-right min-w-[15rem]">
                                            {config.collection != "admins" && (
                                                <button
                                                    onClick={() =>
                                                        handleModify(item)
                                                    }
                                                    className="font-medium mr-10 text-blue-600 dark:text-blue-500 hover:underline"
                                                >
                                                    Modificar
                                                </button>
                                            )}
                                            <button
                                                onClick={() =>
                                                    handleRemove(item)
                                                }
                                                className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    )}
                </table>

                {isModalModActive && (
                    <ModalMod
                        item={selectedItem}
                        closeCallback={handleModalModClose}
                        config={config}
                    />
                )}

                {isModalAddActive && (
                    <ModalAdd
                        closeCallback={handleModalAddClose}
                        config={config}
                    />
                )}
            </div>
        </>
    );
}

export default Table;
