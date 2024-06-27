"use client";

import Navigation from "./components/Navigation/Navigation";
import { useEffect, useState } from "react";

export default function layout({ children }) {
    const [user, setUser] = useState(null);
    const [jwt, setJwt] = useState("");

    console.log("user:", user);
    console.log("jwt:", jwt);

    useEffect(() => {
        if (document.cookie) {
            setUser(JSON.parse(localStorage.getItem("user")));
        } else {
            setUser(JSON.parse(sessionStorage.getItem("user")));
        }
    }, []);

    return <Authorized children={children} />;
}

function UnAuthorized() {
    return (
        <body>
            <main>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                    Debes iniciar sesión para ingresar a este sitio.
                </h1>
            </main>
        </body>
    );
}

function Authorized({ children }) {
    return (
        <body>
            <div className="min-h-full">
                <Navigation />

                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            Administrador
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </body>
    );
}
