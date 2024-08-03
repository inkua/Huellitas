"use client";

import { useEffect, useState } from "react";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import InputImg from "../InputImg/InputImg";
import Loading from "../Loading/Loading";
import uploadImage, { delImage } from "@/services/services";
import { convertToHTML, convertFromHTML } from "draft-convert";

export default function StoriesModal({ isOpen, add = true, item }) {
    const [loading, setLoading] = useState(false);
    const [entradilla, setEntradilla] = useState("");
    const [nombre, setNombre] = useState("");
    const [editorState, setEditorState] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null); // imagen seleccionada desde el input

    const handleAdd = async (e) => {
        try {
            e.preventDefault();

            const htmlTag = document.getElementsByTagName("html")[0];
            htmlTag.classList.add("!cursor-wait");
            htmlTag.classList.add("pointer-events-none");

            const data = {
                nombre: nombre,
                entradilla: entradilla,
                articulo: convertToHTML(editorState.getCurrentContent()),
            };

            console.log(selectedImage);

            const imageUrl = await uploadImage(selectedImage);
            data.imagen = imageUrl;

            await fetch("/api/historias", {
                method: "POST",
                body: JSON.stringify({
                    token: "",
                    data: data,
                }),
            });

            //This Does not refresh the table
            handleclose();

            //so meanwhile...
            location.reload();
        } catch (e) {
            console.log(e.message);
            htmlTag.classList.remove("!cursor-wait");
            htmlTag.classList.remove("pointer-events-none");
        }
    };

    const handleMod = async (e) => {
        try {
            e.preventDefault();

            const htmlTag = document.getElementsByTagName("html")[0];
            htmlTag.classList.add("!cursor-wait");
            htmlTag.classList.add("pointer-events-none");

            const data = {
                nombre: nombre,
                entradilla: entradilla,
                articulo: convertToHTML(editorState.getCurrentContent()),
            };

            let imageUrl;
            if (e.target.image.files[0]) {
                imageUrl = await uploadImage(selectedImage);
                data.imagen = imageUrl;
            }

            await fetch("/api/historias", {
                method: "PUT",
                body: JSON.stringify({
                    token: "",
                    id: item.id,
                    data: data,
                }),
            });

            if (selectedImage) {
                await delImage(item.data.imagen);
            }

            //This Does not refresh the table
            handleclose();

            //so meanwhile...
            location.reload();
        } catch (e) {
            console.log(e.message);
            htmlTag.classList.remove("!cursor-wait");
            htmlTag.classList.remove("pointer-events-none");
        }
    };

    const handleclose = () => {
        if (add) {
            isOpen.setStoriesModalAdd(false);
        } else {
            isOpen.setStoriesModalMod(false);
        }
    };

    const handleSubmit = (e) => {
        if (add) {
            handleAdd(e);
        } else {
            handleMod(e);
        }
    };

    useEffect(() => {
        if (!add) {
            setLoading(true);
        }

        if (item) {
            setNombre(item.data.nombre);
            setEntradilla(item.data.entradilla);

            // Not working, maybe it updates after setting this
            //setEditorState(convertFromHTML(item.data.articulo));

            setLoading(false);
        }
    }, []);

    return (
        <div
            id="crud-modal"
            className=" overflow-y-auto bg-[#ffffff80] flex overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div className="relative p-4 w-full  md:w-[70vw] md:max-w-[900px] max-h-full">
                <div className="relative bg-[#f2f0fd] rounded-xl shadow ">
                    <div className="flex items-center rounded-t-xl border-2 border-primaryColor justify-between p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-[#6b6b6b]">
                            {add ? "Añadir Nueva" : "Modificar"}
                        </h3>
                        <button
                            onClick={() => handleclose()}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="crud-modal"
                        >
                            <svg
                                className="w-3 h-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {loading ? (
                        <Loading />
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="border-2 border-t-0 rounded-b-xl border-primaryColor p-4 md:p-5"
                        >
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label
                                        htmlFor="title"
                                        className="block mb-2 text-sm font-medium text-[#6b6b6b]"
                                    >
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="border border-gray-300 text-[#6b6b6b] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Nombre"
                                        required
                                        value={nombre}
                                        onChange={(e) =>
                                            setNombre(e.target.value)
                                        }
                                    ></input>
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor="entradilla"
                                        className="block mb-2 text-sm font-medium text-[#6b6b6b]"
                                    >
                                        Entradilla{" "}
                                        <span className="text-[11px] font-thin text-black">
                                            * {`${entradilla.length}`}{" "}
                                            caracteres
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="entradilla"
                                        id="entradilla"
                                        className="border border-gray-300 text-[#6b6b6b] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="min50-max160 caracteres"
                                        required
                                        pattern=".{50,160}"
                                        value={entradilla}
                                        onChange={(e) =>
                                            setEntradilla(e.target.value)
                                        }
                                    ></input>
                                </div>

                                <div className="col-span-2">
                                    <label
                                        htmlFor="articulo"
                                        className="block mb-2 text-sm font-medium text-[#6b6b6b]"
                                    >
                                        Artículo
                                    </label>
                                    <RichTextEditor
                                        data={{ editorState, setEditorState }}
                                    />
                                </div>

                                <div className="col-span-2">
                                    <InputImg
                                        data={{
                                            selectedImage,
                                            setSelectedImage,
                                        }}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="text-white inline-flex items-center bg-primaryColor hover:bg-secondaryColor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Guardar
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
