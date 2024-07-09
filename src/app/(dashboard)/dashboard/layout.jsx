"use client";

import Navigation from "./components/Navigation/Navigation";
import { useEffect, useState } from "react";

export default function layout({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        try {
            let isUser;
            if (document.cookie && localStorage.getItem("user")) {
                isUser = JSON.parse(localStorage.getItem("user"));
                setUser(isUser);
            } else {
                isUser = JSON.parse(sessionStorage.getItem("user"));
                setUser(isUser);
            }

            if (!isUser) {
                window.location.replace("/auth");
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    if (user) {
        return <Authorized children={children} user={user} />;
    } else {
        return <UnAuthorized />;
    }
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

function UnAuthorized() {
    return (
        <body>
            <main></main>
        </body>
    );
}
