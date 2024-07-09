"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation({ user }) {
    const [menu, setMenu] = useState(false);
    const [drop, setDrop] = useState(false);

    function handleLogout() {
        localStorage.clear();
        sessionStorage.clear();
        // We delete the cookie setting an "expires" in the past
        document.cookie =
            "jwt=deleted;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    }

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-8 w-8"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company"
                            ></img>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link
                                    href="/dashboard"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                    aria-current="page"
                                >
                                    Historias
                                </Link>

                                <Link
                                    href="/dashboard/posts"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                >
                                    Posteos
                                </Link>
                                <Link
                                    href="/dashboard/sponsors"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                >
                                    Sponsors
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            {/* Profile dropdown */}
                            <div className="relative ml-3">
                                <div>
                                    <button
                                        onClick={() => setDrop(!drop)}
                                        type="button"
                                        className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        id="user-menu-button"
                                        aria-expanded="false"
                                        aria-haspopup="true"
                                    >
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">
                                            Open user menu
                                        </span>
                                        <div className="h-10 w-10 bg-white rounded-full">
                                            <img
                                                src="/assets/Login/profile.svg"
                                                alt=""
                                            />
                                        </div>
                                    </button>
                                </div>

                                {drop && (
                                    <div
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="user-menu-button"
                                        tabIndex="-1"
                                    >
                                        <Link
                                            onClick={handleLogout}
                                            href="/auth"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="user-menu-item-2"
                                        >
                                            Cerrar sesión
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMenu(!menu)}
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            {/* Menu open: "hidden", Menu closed: "block" */}
                            <svg
                                className="block h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            {/* Menu open: "block", Menu closed: "hidden" */}
                            <svg
                                className="hidden h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            {menu && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        <Link
                            href="/dashboard"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                            aria-current="page"
                        >
                            Historias
                        </Link>
                        <Link
                            href="/dashboard/posts"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        >
                            Posteos
                        </Link>
                        <Link
                            href="/dashboard/sponsors"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        >
                            Sponsors
                        </Link>
                    </div>
                    <div className="border-t border-gray-700 pb-3 pt-4">
                        <div className="flex items-center px-5">
                            <div className="">
                                <div className="text-base font-medium leading-none text-white">
                                    {user.username} {/* Nombre de usuario*/}
                                </div>
                                <div className="text-sm font-medium leading-none text-gray-400">
                                    {user.email} {/* Correo del usuario*/}
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 space-y-1 px-2">
                            <Link
                                onClick={handleLogout}
                                href="/auth"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                            >
                                Cerrar sesión
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
