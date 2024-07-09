"use client";

import { useState } from "react";
import axios from "axios";

function LoginForm() {
    const [remember, setRemember] = useState(false);
    const [showNoUserMessage, setShowNoUserMessage] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if (!sessionStorage.getItem("jwt") && !document.cookie) {
            logIn(e.target.username.value, e.target.password.value);
        } else {
            window.location.replace("/dashboard");
        }
    }

    async function logIn(user, pass) {
        try {
            const response = await axios.post(
                "http://localhost:1337/api/auth/local?populate=*",
                {
                    identifier: user,
                    password: pass,
                }
            );
            saveUser(response.data);
            window.location.replace("/dashboard");
        } catch (error) {
            console.log(error.data);
            setShowNoUserMessage(true);
        }
    }

    function saveUser(data) {
        if (remember) {
            document.cookie =
                "jwt=" +
                data.jwt +
                ";expires=" +
                new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString() +
                ";SameSite=None;path=/";
            localStorage.setItem("user", JSON.stringify(data.user));
        } else {
            sessionStorage.setItem("jwt", data.jwt);
            sessionStorage.setItem("user", JSON.stringify(data.user));
        }
    }

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 items-center text-black"
        >
            <input
                className="w-[75vw] shadow-[0_4px_4px_rgba(0,0,0,0.25)] max-w-[26.935rem] p-3 rounded-[2rem]"
                placeholder="Usuario"
                name="username"
                type="text"
                id="idUsername"
            />
            <div className="relative">
                <input
                    className="w-[75vw] shadow-[0_4px_4px_rgba(0,0,0,0.25)] max-w-[26.935rem] p-3 rounded-[2rem]"
                    placeholder="Contraseña"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    id="idPassword"
                />
                {showPassword ? (
                    <button
                        type="button"
                        onClick={handleShowPassword}
                        className="absolute right-0 mr-3 top-1 mt-[0.6rem]"
                    >
                        <img
                            src="assets/Login/eye.svg"
                            alt="Boton de ocultar contraseña"
                        />
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={handleShowPassword}
                        className="absolute right-0 mr-3 top-1 mt-[0.6rem]"
                    >
                        <img
                            src="assets/Login/eyent.svg"
                            alt="Boton de mostrar contraseña"
                        />
                    </button>
                )}
            </div>

            <section className="flex flex-col md:flex-row gap-3 my-3 w-[calc(100%-2rem)] text-white text-sm items-center md:justify-between">
                <div
                    onClick={() => setRemember(!remember)}
                    className="flex items-center gap-2 font-semibold hover:text-blue-200 hover:cursor-pointer"
                >
                    <div
                        id="idRememberLogin"
                        className="rounded-lg  w-6 p-1 h-6 border-2 border-white"
                    >
                        {remember && (
                            <img
                                className="w-full"
                                src="assets/Login/remember_icon_login.svg"
                                alt=""
                            />
                        )}
                    </div>
                    Recuerda mis datos
                </div>
            </section>
            {showNoUserMessage && (
                <section className="text-white drop-shadow-[0_0px_5px_rgba(255,0,0,1)]">
                    Usuario/Contraseña inválida.
                </section>
            )}
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
