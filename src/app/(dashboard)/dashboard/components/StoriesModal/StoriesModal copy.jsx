'use client'

import { useState } from "react"
import RichTextEditor from "../RichTextEditor/RichTextEditor"

export default function StoriesModal({isOpen}) {
    const {setStoriesModal} = isOpen
    const [entradilla, setEntradilla]=useState('')

    const handleclose=()=>{
        setStoriesModal(false)
    }


    return (
        <div
                id="crud-modal"
                className=" overflow-y-auto bg-[#ffffff80] flex overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative p-4 w-full  md:w-[70vw] md:max-w-[900px] max-h-full">
                    <div className="relative bg-[#f2f0fd] rounded-lg shadow ">
                        <div className="flex items-center rounded-t-xl border-2 border-primaryColor justify-between p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-[#6b6b6b]">
                                Modificar
                            </h3>
                            <button
                                onClick={()=>handleclose()}
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
                        <form
                            
                            className="border-2 border-t-0 rounded-b-xl border-primaryColor p-4 md:p-5"
                        >
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label
                                        htmlFor="entradilla"
                                        className="block mb-2 text-sm font-medium text-[#6b6b6b]"
                                    >
                                        Entradilla <span className="text-[11px] font-thin text-black">* {`${entradilla.length}`} caracteres</span>
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
                                        onChange={(e)=>setEntradilla(e.target.value)}
                                    ></input>
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor="articulo"
                                        className="block mb-2 text-sm font-medium text-[#6b6b6b]"
                                    >
                                        Artículo <span className="text-[11px] font-thin text-black">* {`${entradilla.length}`} caracteres</span>
                                    </label>
                                    <RichTextEditor />
                                </div>
                                
                                
                            </div>
                            <button
                                type="submit"
                                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Modificar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    );
}
