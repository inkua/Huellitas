"use client";

import { useEffect, useContext } from "react";
import { AdminContext } from "./AdminProvider";
import { useRouter } from "next/navigation";

export default function RouterSecurity({ children }) {
    const { user } = useContext(AdminContext);
    const router = useRouter();

    useEffect(() => {
        const pathname = window.location.pathname;

        if (pathname == "/dashboard") {
            if (!user) {
                console.log("Router Security", user);
                //router.push("/auth");
            } else {
                console.log("Router Security", user);
            }
        }
    });

    return <>{children}</>;
}
