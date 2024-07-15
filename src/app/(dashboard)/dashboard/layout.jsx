"use client";

import { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";

export default function layout({ children }) {
    const [token, setToken] = useState("");

    function getToken() {
        if (localStorage.getItem("jwt")) {
            setToken(localStorage.getItem("jwt"));
        } else if (sessionStorage.getItem("jwt")) {
            setToken(sessionStorage.getItem("jwt"));
        } else {
            window.location.replace("/auth");
        }
    }

    useEffect(() => {
        getToken();
    }, []);

    if (token) {
        return (
            <body>
                <div className="min-h-full">
                    <Navigation />
                    <main>
                        <div className="mx-auto max-w-7xl py-6 px-6 sm:px-6 lg:px-8">
                            {children}
                        </div>
                    </main>
                </div>
            </body>
        );
    } else {
        return <body></body>;
    }
}
