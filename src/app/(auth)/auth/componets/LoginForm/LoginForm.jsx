"use client";

import { useState, useContext } from "react";
import { logIn } from "@/services/user.services";
import { AdminContext } from "@/components/AdminProvider";

function LoginForm() {
    const [remember, setRemember] = useState(false);
    const [showNoUserMessage, setShowNoUserMessage] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { updateUser } = useContext(AdminContext);

    function handleSubmit(e) {
        e.preventDefault();
        handleLogIng(e.target.email.value, e.target.password.value);
    }

    async function handleLogIng(email, pass) {
        try {
            const user = await logIn(email, pass);

            if (user) {
                saveUser(user);
                window.location.replace("/dashboard");
            } else {
                setShowNoUserMessage(true);
            }
        } catch (e) {
            console.log(e);
            setShowNoUserMessage(true);
        }
    }

    function saveUser(user) {
        try {
            updateUser(user);
            sessionStorage.setItem("user", JSON.stringify(user));
        } catch (e) {
            console.log(e);
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
                placeholder="Email"
                name="email"
                type="text"
                id="idEmail"
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
