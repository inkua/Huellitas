"use client";

import { useEffect, useContext } from "react";
import { AdminContext } from "./AdminProvider";
import { useRouter, usePathname } from "next/navigation";

export default function RouterSecurity({ children }) {
    const { user } = useContext(AdminContext);
    const router = useRouter();
    const pathname = usePathname()

    useEffect(() => {
        if (!user) {
            router.push("/auth");
        } else if(user.role=='admin' && pathname=='/dashboard/users'){
            router.push("/dashboard");
        }
    });

    return <>{children}</>;
}
