import LoginForm from "../LoginForm/LoginForm";

function Login() {
    return (
        <body>
            {/* Ajusto la altura para que el footer siempre 
             se pueda ver en una resolucion razonable*/}
            <main className="grid lg:grid-cols-2 h-[calc(100vh-3.5rem)] min-h-[45rem]">
                <section className="bg-[url('/assets/Login/bg_login.png')] bg-center bg-cover hidden lg:block">
                    <span className="sr-only">
                        Imagen de un perro con su dueño, felices.
                    </span>
                </section>
                <section className="flex flex-col gap-6 items-center justify-center bg-primaryColor p-1">
                    <img
                        src="/assets/Login/logo_login.png"
                        alt="logo de Huellitas Cartagena conformado por un perrito y un gato."
                        className="w-[15rem]"
                    />
                    <h1 className="font-semibold text-3xl text-center">
                        Entrá a tu cuenta
                    </h1>

                    <LoginForm />

                    {/** Contenedor para hacer una linea de decoración */}
                    <div className="mt-10 h-[1px] w-[75%] bg-white"></div>
                </section>
            </main>
            <footer className="flex bg-[#585564] h-14 justify-center items-center">
                Diseño y Programación:
                <a
                    className="ml-2 font-bold hover:text-blue-300"
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
