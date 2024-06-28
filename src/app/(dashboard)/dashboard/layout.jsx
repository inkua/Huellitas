"use client";

import Navigation from "./components/Navigation/Navigation";
import { useEffect, useState } from "react";

export default function layout({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (document.cookie && localStorage.getItem("user")) {
            setUser(JSON.parse(localStorage.getItem("user")));
        } else {
            setUser(JSON.parse(sessionStorage.getItem("user")));
        }
    }, []);

    if (user) {
        return <Authorized children={children} user={user} />;
    } else {
        return <UnAuthorized />;
    }
}

function UnAuthorized() {
    return (
        <body>
            <main className="flex h-[50vh] items-center justify-center">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                    Solo el administrador y los colaboradores pueden acceder a
                    este sitio.
                </h1>
            </main>
        </body>
    );
}

function Authorized({ children, user }) {
    return (
        <body>
            <div className="min-h-full">
                <Navigation user={user} />

                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            Administrador
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 px-6 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </body>
    );
}
