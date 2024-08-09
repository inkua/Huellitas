"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

// SVG ICONS
import { TablerMenu2 } from "../../../../../public/assets/logos/svg/tabler-menu";
import { RadixIconsCross2 } from "../../../../../public/assets/logos/svg/cancel";
import { ArrowDropMenu } from "../../../../../public/assets/logos/svg/arrow-drop-menu";

function Navbar() {
    const currentPath = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [showMenu, setShowMenu] = useState(false);
    const handleLinkClick = () => {
        setShowMenu(false);
    };

    return (
        <div className={`relative z-10 w-full bg-white h-[80px] duration-500 md:h-[135px] ${isScrolled ? 'h-[80px] md:h-[70px] shadow-lg' : 'shadow-none'}`}>
            <div className={`fixed w-full h-[80px] md:h-[135px] duration-500 bg-white ${isScrolled ? 'h-[80px] md:h-[70px] shadow-lg' : 'shadow-none'}`}>
                <nav className='flex w-[100%] h-full lg:w-[80%] max-w-screen-2xl duration-500 justify-between items-center  px-4 mx-auto bg-white'>
                    <div className="md:hidden flex flex-grow basis-0">
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="text-3xl md:hidden"
                        >
                            {showMenu ? <RadixIconsCross2 /> : <TablerMenu2 />}
                        </button>
                    </div>
                    <div className="flex md:flex-grow md:basis-0 md:justify-start h-full relative">
                        <Link href="/" className="h-full flex items-center">
                            <Image
                                className={`py-2 w-auto h-full lg:h-full lg:max-w-[135px] lg:max-h-[135px] bg-white duration-500 ${isScrolled ? '' : 'md:h-[70%]'}`}
                                src={"https://res.cloudinary.com/dorljfo6v/image/upload/v1718047440/huellitas/logo-huellitas_ckm05d.png"}
                                alt="logo"
                                height={700}
                                width={700}
                            />
                        </Link>
                    </div>
                    <div
                        className={`md:static absolute md:shadow-none md:min-h-fit left-0 ${showMenu ? "top-[100%] shadow-lg" : "top-[-300%]"
                            } md:w-auto w-full flex items-center px-5 bg-white transition-all duration-500 ease-in-out z-[-10] md:z-0 md:bg-transparent py-4`}
                    >
                        <ul className="w-full flex justify-center items-center md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-primaryFont font-semibold">
                            <li className="relative group">
                                <Link
                                    className={`flex items-center md:text-sm lg:text-base duration-200 hover:text-primaryColor ${currentPath == '/' ? 'text-primaryColor' : 'text-primaryFont'}`}
                                    href="/"
                                    onClick={handleLinkClick}
                                >
                                    INICIO
                                </Link>
                            </li>
                            <li className="relative group">
                                <Link
                                    className={`flex items-center md:text-sm lg:text-base duration-200 hover:text-primaryColor ${currentPath == '/fundacion' ? 'text-primaryColor' : 'text-primaryFont'}`}
                                    href="/fundacion"
                                    onClick={handleLinkClick}
                                >
                                    FUNDACIÓN
                                    <div className="group-hover:rotate-180 transition-transform duration-300 hidden md:block ">
                                        <ArrowDropMenu color={`${currentPath == '/fundacion' ? '#6C5CE7' : 'black'}`} />
                                    </div>
                                </Link>

                                {/* ----OPCIONES ----- */}
                                <ul className="absolute left-0 top-full w-[200px] bg-white rounded-2xl  shadow-lg hidden md:group-hover:block p-6 z-10">
                                    <li className="hover:text-gray-800 py-2">
                                        <Link href="/fundacion#nuestra-historia" onClick={handleLinkClick} className="duration-200 hover:text-primaryColor">
                                            NUESTRA HISTORIA
                                        </Link>
                                    </li>
                                    <li className="hover:text-gray-800 py-2">
                                        <Link href="/fundacion#mision" onClick={handleLinkClick} className="duration-200 hover:text-primaryColor">
                                            MISIÓN Y VISIÓN
                                        </Link>
                                    </li>
                                    <li className="hover:text-gray-800 py-2">
                                        <Link href="/fundacion#objetivos" onClick={handleLinkClick} className="duration-200 hover:text-primaryColor">
                                            OBJETIVOS
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <Link
                                    className={`flex items-center duration-200 hover:text-primaryColor md:text-sm lg:text-base ${currentPath == '/adopcion' ? 'text-primaryColor' : 'text-primaryFont'}`}
                                    href="/adopcion"
                                    onClick={handleLinkClick}
                                >
                                    ADOPCIÓN
                                    <div className="group-hover:rotate-180 transition-transform duration-300 hidden md:block">
                                        <ArrowDropMenu color={`${currentPath == '/adopcion' ? '#6C5CE7' : 'black'}`} />
                                    </div>
                                </Link>
                                {/* ----OPCIONES ----- */}
                                <ul className="absolute left-0 top-full w-[200px] bg-white shadow-lg rounded-2xl hidden md:group-hover:block p-6 z-10">

                                    <li className="hover:text-gray-800 py-2">
                                        <Link href="/adopcion#buscamos" onClick={handleLinkClick} className="duration-200 hover:text-primaryColor">
                                            QUIERO ADOPTAR
                                        </Link>
                                    </li>
                                    <li className="hover:text-gray-800 py-2">
                                        <Link href="/adopcion#faq" onClick={handleLinkClick} className="duration-200 hover:text-primaryColor">
                                            REQUISITOS
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link className={`flex items-center duration-200 hover:text-primaryColor md:text-sm lg:text-base ${currentPath == '/contacto' ? 'text-primaryColor' : 'text-primaryFont'}`} href="/contacto" onClick={handleLinkClick}>
                                    CONTACTO
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-grow basis-0 justify-end">
                        <Link href="/colaboracion" onClick={handleLinkClick}>
                            <button
                                type="button"
                                className="primary-btn hidden md:block"
                            >
                                DONA AHORA
                            </button>

                            <button
                                type="button"
                                className="bg-primaryColor py-3 px-4 rounded-full text-white hover:bg-secondaryColor shadow-grey-400 shadow-md block md:hidden"
                            >
                                DONA
                            </button>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
