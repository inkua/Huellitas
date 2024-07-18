"use client";

import Link from "next/link";
import { AdminContext } from "@/components/AdminProvider"; 
import { useContext } from "react";

export default function Navigation() {
    const {updateUser, user} = useContext(AdminContext)

    function handleLogout() {
        sessionStorage.clear();
        updateUser(null)
    }

    return (
        <nav className="bg-primaryColor text-tertiaryColor">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex md:h-20 items-center justify-between">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-4">
                                <Link
                                    href="/dashboard"
                                    className="hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                    aria-current="page"
                                >
                                    HISTORIAS
                                </Link>

                                <Link
                                    href="/dashboard/adopciones"
                                    className="hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                >
                                    ADOPCIÓN
                                </Link>
                                <Link
                                    href="/dashboard/sponsors"
                                    className="hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                >
                                    SPONSORS
                                </Link>
                                {
                                user&&
                                user.role==='root'&&
                                    <Link
                                    href="/dashboard/users"
                                    className="hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                    >
                                        USUARIOS
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center">
                            <Link
                                onClick={handleLogout}
                                href="/auth"
                                className=""
                                role="menuitem"
                                tabIndex="-1"
                                id="user-menu-item-2"
                            >
                                Cerrar sesión
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:hidden p-4">
                <div className="flex items-center justify-center">
                    <Link
                        href="/dashboard"
                        className="hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        aria-current="page"
                    >
                        HISTORIAS
                    </Link>
                    <Link
                        href="/dashboard/posts"
                        className="hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                        ADOPCIÓN
                    </Link>
                    <Link
                        href="/dashboard/sponsors"
                        className="hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                        SPONSORS
                    </Link>
                    {
                    user&&
                    user.role==='root'&&
                        <Link
                        href="/dashboard/users"
                        className="hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        >
                            USUARIOS
                        </Link>
                    }
                </div>
                <div>
                    <div className="mt-10 px-2 text-center">
                        <Link
                            onClick={handleLogout}
                            href="/auth"
                            className="hover:text-white"
                        >
                            Cerrar sesión
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
