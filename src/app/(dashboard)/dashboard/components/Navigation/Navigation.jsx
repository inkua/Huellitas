"use client";

import Link from "next/link";

export default function Navigation({ user }) {
    function handleLogout() {
        localStorage.clear();
        sessionStorage.clear();
        // We delete the cookie setting an expiration date in the past
        document.cookie =
            "jwt=deleted;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
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
