function Login() {
    return (
        <body>
            {/* Ajusto la altura para que el footer siempre 
             se pueda ver en una resolucion razonable*/}
            <main className="grid lg:grid-cols-2 md:h-[calc(100vh-3.5rem)] min-h-[48rem]">
                <section className="bg-[url('/assets/Login/bg_login.png')] bg-center bg-cover hidden md:block">
                    <span className="sr-only">
                        Imagen de un perro con su dueño, felices.
                    </span>
                </section>
                <section className="flex flex-col gap-6 items-center justify-center bg-primaryColor p-10">
                    <img
                        src="/assets/Login/logo_login.png"
                        alt="logo de Huellitas Cartagena conformado por un perrito y un gato."
                    />
                    <h1 className="font-semibold text-3xl">
                        Entrá a tu cuenta
                    </h1>

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
                            type="text"
                            id="idPassword"
                        />
                        <section className="flex flex-col md:flex-row gap-3 my-3 w-[calc(100%-2rem)] text-white text-sm items-center md:justify-between">
                            <label className="flex gap-2 font-semibold hover:text-blue-200">
                                <input
                                    type="checkbox"
                                    name="rememberLogin"
                                    id="idRememberLogin"
                                />
                                Recuerda mis datos
                            </label>

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
                    {/** Contenedor para hacer una linea de decoración */}
                    <div className="mt-10 h-[1px] w-[75%] bg-white"></div>
                </section>
            </main>
            <footer className="flex bg-[#585564] h-14 justify-center items-center">
                Diseño y Programación:
                <a
                    className="ml-2 font-bold"
                    href="https://inkua.de/what-is-inkua"
                    target="_blank"
                >
                    InkuA
                </a>
            </footer>
        </body>
    );
}

export default Login;
