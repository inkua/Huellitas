"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// SVG ICONS
import { TablerMenu2 } from "../../../../../public/assets/logos/svg/tabler-menu";
import { RadixIconsCross2 } from "../../../../../public/assets/logos/svg/cancel";
import { ArrowDropMenu } from "../../../../../public/assets/logos/svg/arrow-drop-menu";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    // Function to handle link click and close the menu
    const handleLinkClick = () => {
        setShowMenu(false);
    };

    return (
        <div className="relative z-10 w-full bg-white">
            <nav className="flex relative justify-between items-center w-[100%] md:w-[80%] px-4 mx-auto bg-white max-w-screen-2xl">
                <div className="md:hidden flex flex-grow basis-0">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="text-3xl md:hidden"
                    >
                        {showMenu ? <RadixIconsCross2 /> : <TablerMenu2 />}
                    </button>
                </div>
                <div className="flex md:flex-grow md:basis-0 md:justify-start">
                    <Link href="/">
                        <Image
                            className="py-2 bg-white w-[100px] min-w-24 md:w-[144px] "
                            src={"https://res.cloudinary.com/dorljfo6v/image/upload/v1718047440/huellitas/logo-huellitas_ckm05d.png"}
                            alt="logo"
                            height={700}
                            width={700}
                        />
                    </Link>
                </div>
                <div
                    className={`md:static absolute md:min-h-fit left-0 ${showMenu ? "top-[100%]" : "top-[-300%]"
                        } md:w-auto w-full flex items-center px-5 bg-white transition-all duration-500 ease-in-out z-[-10] md:z-0 md:bg-transparent py-4`}
                >
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-primaryFont font-semibold">
                        <li className="relative group">
                            <Link
                                className="flex items-center hover:text-gray-900"
                                href="/fundacion"
                                onClick={handleLinkClick}
                            >
                                FUNDACIÓN
                                <div className="group-hover:rotate-180 transition-transform duration-300 hidden md:block">
                                    <ArrowDropMenu />
                                </div>
                            </Link>

                            {/* ----OPCIONES ----- */}
                            <ul className="absolute left-0 top-full w-[200px] bg-white rounded-2xl  shadow-lg hidden md:group-hover:block p-6 z-10">
                                <li className="hover:text-gray-800 py-2">
                                    <Link href="/fundacion#nuestra-historia" onClick={handleLinkClick}>
                                        NUESTRA HISTORIA
                                    </Link>
                                </li>
                                <li className="hover:text-gray-800 py-2">
                                    <Link href="/fundacion#mision" onClick={handleLinkClick}>
                                        MISIÓN Y VISIÓN
                                    </Link>
                                </li>
                                <li className="hover:text-gray-800 py-2">
                                    <Link href="/fundacion#objetivos" onClick={handleLinkClick}>
                                        OBJETIVOS
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="relative group">
                            <Link
                                className="flex items-center hover:text-gray-900"
                                href="/adopcion"
                                onClick={handleLinkClick}
                            >
                                ADOPCIÓN
                                <div className="group-hover:rotate-180 transition-transform duration-300 hidden md:block">
                                    <ArrowDropMenu />
                                </div>
                            </Link>
                            {/* ----OPCIONES ----- */}
                            <ul className="absolute left-0 top-full w-[200px] bg-white shadow-lg rounded-2xl hidden md:group-hover:block p-6 z-10">

                                <li className="hover:text-gray-800 py-2">
                                    <Link href="/adopcion" onClick={handleLinkClick}>
                                        QUIERO ADOPTAR
                                    </Link>
                                </li>
                                <li className="hover:text-gray-800 py-2">
                                    <Link href="/adopcion" onClick={handleLinkClick}>
                                        REQUISITOS
                                    </Link>
                                </li>
                                <li className="hover:text-gray-800 py-2">
                                    <Link href="/adopcion" onClick={handleLinkClick}>
                                        ELLOS BUSCAN HOGAR
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="relative group">
                            <Link
                                className="flex items-center hover:text-gray-900"
                                href="/colaboracion"
                                onClick={handleLinkClick}
                            >
                                COLABORACIÓN
                            </Link>

                        </li>
                        <li>
                            <Link className="hover:text-gray-900" href="/contacto" onClick={handleLinkClick}>
                                CONTACTO
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-grow basis-0 justify-end">
                    <button
                        type="button"
                        className="bg-primaryColor py-1 px-4 rounded-full text-white hover:bg-secondaryColor shadow-grey-400 shadow-md hidden md:block"
                    >
                        DONÁ AHORA
                    </button>

                    <button
                        type="button"
                        className="bg-primaryColor py-3 px-4 rounded-full text-white hover:bg-secondaryColor shadow-grey-400 shadow-md block md:hidden"
                    >
                        DONÁ
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
