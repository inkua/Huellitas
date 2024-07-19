"use client";

import { useContext, createContext, useState } from "react";

export const AdminContext = createContext();
export const useAdminContext = () => useContext(AdminContext);

export function AdminProvider({ children }) {
    const [user, setUser] = useState(null);

    const updateUser = (anUser) => {
        setUser(anUser);
    };

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

    return (
        <AdminContext.Provider value={{ user, updateUser }}>
            {children}
        </AdminContext.Provider>
    );
}
