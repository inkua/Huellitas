"use client";

import { useState, useEffect } from "react";
import CRUD from "@/services";
import ModalAddPost from "./Modals/ModalAddPost";
import ModalModPost from "./Modals/ModalModPost";

function PostsTable({ data, refreshCallback }) {
    const [isModalAddActive, setIsModalAddActive] = useState(false);
    const [isModalModActive, setIsModalModActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [token, setToken] = useState("");

    useEffect(() => {
        if (document.cookie) {
            setToken(document.cookie.split("=")[1]);
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
        await CRUD.removePost(item, token);
        refreshCallback(Date.now());
    }

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Titulo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descripcion
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Editar</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr
                                    key={item.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {item.attributes.title}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.attributes.description}
                                    </td>
                                    <td className="px-6 py-4 text-right">
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
                </table>

                {isModalModActive && (
                    <ModalModPost
                        item={selectedItem}
                        closeCallback={handleModalModClose}
                        token={token}
                    />
                )}

                {isModalAddActive && (
                    <ModalAddPost
                        token={token}
                        closeCallback={handleModalAddClose}
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

export default PostsTable;
