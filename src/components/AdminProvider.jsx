"use client";

import { useContext, createContext, useState, useEffect } from "react";

export const AdminContext = createContext();
export const useAdminContext = () => useContext(AdminContext);

export function AdminProvider({ children }) {
    const [user, setUser] = useState(null);
    console.log("Admin provider", user);

    const updateUser = (anUser) => {
        setUser(anUser);
    };

    useEffect(() => {
        try {
            if (!user) {
                const sessionUser = JSON.parse(sessionStorage.getItem("user"));

                if (sessionUser) {
                    setUser(sessionUser);
                }
            }
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <AdminContext.Provider value={{ user, updateUser }}>
            {children}
        </AdminContext.Provider>
    );
}
