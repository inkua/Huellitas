"use client";

import Link from "next/link";
import { AdminContext } from "@/components/AdminProvider"; 
import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const {updateUser, user} = useContext(AdminContext)
    const [loading, setLoading] = useState(true)
    const path = usePathname()
    
    function handleLogout() {
        setLoading(true)
        sessionStorage.clear();
        updateUser(null)
    }

    useEffect(()=>{
        if(user){
            setLoading(false)
        }
    })
    
    return (
        <nav className="bg-primaryColor text-tertiaryColor">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex md:h-20 items-center justify-between">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-4">
                                <Link
                                    href="/dashboard"
                                    className={`hover:font-semibold rounded-md px-3 py-2 text-sm font-medium ${path=="/dashboard" && 'underline'}`}
                                    aria-current="page"
                                >
                                    HISTORIAS
                                </Link>

                                <Link
                                    href="/dashboard/adopciones"
                                    className={`hover:font-semibold rounded-md px-3 py-2 text-sm font-medium ${path=="/dashboard/adopciones" && 'underline'}`}
                                >
                                    ADOPCIÓN
                                </Link>
                                <Link
                                    href="/dashboard/sponsors"
                                    className={`hover:font-semibolde rounded-md px-3 py-2 text-sm font-medium ${path=="/dashboard/sponsors" && 'underline'}`}
                                >
                                    SPONSORS
                                </Link>
                                {
                                loading?
                                <div></div>
                                :
                                user.role==='root'&&
                                    <Link
                                    href="/dashboard/users"
                                    className={`hover:font-semibold rounded-md px-3 py-2 text-sm font-medium ${path=="/dashboard/users" && 'underline'}`}
                                    >
                                        USUARIOS
                                    </Link>
                                }
                                <Link
                                    href="/"
                                    className="hover:font-semibold rounded-md px-3 py-2 text-sm font-medium"
                                >
                                    WEB
                                </Link>
                                
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
                <div className="flex flex-wrap items-center justify-center">
                    <Link
                        href="/dashboard"
                        className={`hover:text-sm rounded-md px-3 py-2 text-xs font-medium ${path=="/dashboard" && 'underline'}`}
                        aria-current="page"
                    >
                        HISTORIAS
                    </Link>
                    <Link
                        href="/dashboard/adopciones"
                        className={`hover:text-sm rounded-md px-3 py-2 text-xs font-medium ${path=="/dashboard/adopciones" && 'underline'}`}
                    >
                        ADOPCIÓN
                    </Link>
                    <Link
                        href="/dashboard/sponsors"
                        className={`hover:text-sm rounded-md px-3 py-2 text-xs font-medium ${path=="/dashboard/sponsors" && 'underline'}`}
                    >
                        SPONSORS
                    </Link>
                    {
                    loading?
                    <div></div>
                    :
                    user.role==='root'&&
                        <Link
                        href="/dashboard/users"
                        className={`hover:text-sm rounded-md px-3 py-2 text-xs font-medium ${path=="/dashboard/users" && 'underline'}`}
                        >
                            USUARIOS
                        </Link>
                    }
                    <Link
                        href="/"
                        className="hover:text-sm rounded-md px-3 py-2 text-xs font-medium"
                    >
                        WEB
                    </Link>
                </div>
                <div>
                    <div className="mt-10 px-2 text-center">
                        <Link
                            onClick={handleLogout}
                            href="/auth"
                            className="hover:text-sm text-xs"
                        >
                            Cerrar sesión
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
