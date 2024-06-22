"use client";

import { useState } from "react";

function LoginForm() {
    const [checked, setChecked] = useState(false);

    function handleCheck() {
        setChecked(!checked);
    }

    console.log(checked);

    return (
        <form className="flex flex-col gap-5 items-center text-black">
            <input
                className="w-[75vw] shadow-[0_4px_4px_rgba(0,0,0,0.25)] max-w-[26.935rem] p-3 rounded-[2rem]"
                placeholder="Usuario"
                type="text"
                id="idUsername"
            />
            <input
                className="w-[75vw] shadow-[0_4px_4px_rgba(0,0,0,0.25)] max-w-[26.935rem] p-3 rounded-[2rem]"
                placeholder="Contraseña"
                type="password"
                id="idPassword"
            />
            <section className="flex flex-col md:flex-row gap-3 my-3 w-[calc(100%-2rem)] text-white text-sm items-center md:justify-between">
                <div
                    onClick={handleCheck}
                    className="flex items-center gap-2 font-semibold hover:text-blue-200 hover:cursor-pointer"
                >
                    <div
                        id="idRememberLogin"
                        className="rounded-lg  w-6 p-1 h-6 border-2 border-white"
                    >
                        {checked && (
                            <img
                                className="w-full"
                                src="assets/Login/remember_icon_login.svg"
                                alt=""
                            />
                        )}
                    </div>
                    Recuerda mis datos
                </div>

                <a
                    className="underline hover:text-blue-200"
                    href="#LlamanosQueTeLoArreglamos"
                >
                    Olvidé mi contraseña
                </a>
            </section>
            <button
                className="transition-all durartion-200 hover:text-black hover:bg-white text-white border-2 w-fit font-medium py-2 px-10 rounded-[2rem]"
                type="submit"
                id="idSubmitBtn"
            >
                Iniciar sesión
            </button>
        </form>
    );
}

export default LoginForm;
