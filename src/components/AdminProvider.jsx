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
            const sessionUserString = sessionStorage.getItem("user");

            if (sessionUserString) {
                const sessionUser = JSON.parse(sessionUserString);
                updateUser(sessionUser);
            }
        }
    } catch (e) {
        if (e instanceof ReferenceError && e.message.includes("sessionStorage is not defined")) {
            console.log('Could not executate sessionStorage in server side');
        } else {
            console.log(e);
        }
    }

    return (
        <AdminContext.Provider value={{ user, updateUser }}>
            {children}
        </AdminContext.Provider>
    );
}
