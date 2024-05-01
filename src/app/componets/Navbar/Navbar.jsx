"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// SVG ICONS
import Logo from "../../../../public/svg/logo.svg";
import { TablerMenu2 } from "../../../../public/svg/tabler-menu";
import { RadixIconsCross2 } from "../../../../public/svg/cancel";
import { ArrowDropMenu } from "../../../../public/svg/arrow-drop-menu";

function Navbar() {
  let [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative z-10 w-full bg-white">
      <nav className="flex relative justify-between items-center w-[100%] md:w-[80%] px-4 mx-auto bg-white">
        <Image
          className="text-2xl text-tertiary py-4"
          src={Logo}
          alt="logo"
          height={80}
          width={80}
        />
        <div
          className={`md:static absolute md:min-h-fit left-0 ${
            showMenu ? "top-[100%]" : "top-[-300%]"
          } md:w-auto w-full flex items-center px-5 bg-white transition-all duration-500 ease-in-out z-[-10] md:z-0 md:bg-transparent py-4`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-black font-semibold">
            <li className="relative group">
              <Link
                className="flex items-center hover:text-gray-900"
                href="/"
              >
                FUNDACIÓN
                <ArrowDropMenu className="ml-2 group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              {/* ----OPCIONES ----- */}
              <ul className="absolute left-0 top-full w-[200px] bg-white shadow-lg rounded hidden group-hover:block p-6 z-10">
                <li className=" hover:text-gray-800 py-2">
                  <Link href="/">NUESTRA HISTORIA</Link>
                </li>
                <li className=" hover:text-gray-800 py-2">
                  <Link href="/">MISIÓN Y VISIÓN</Link>
                </li>
                <li className=" hover:text-gray-800 py-2">
                  <Link href="/">OBJETIVOS</Link>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <Link
                className="flex items-center hover:text-gray-900"
                href="/"
              >
                ADOPCIÓN
                <ArrowDropMenu />
              </Link>
              {/* ----OPCIONES ----- */}
              <ul className="absolute left-0 top-full w-[200px] bg-white shadow-lg rounded hidden group-hover:block p-6 z-10">
                <li className=" hover:text-gray-800 py-2">
                  <Link href="/">QUIERO ADOPTAR</Link>
                </li>
                <li className=" hover:text-gray-800 py-2">
                  <Link href="/">REQUISITOS</Link>
                </li>
                <li className=" hover:text-gray-800 py-2">
                  <Link href="/">ELLOS BUSCAN HOGAR</Link>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <Link
                className="flex justify-center items-center hover:text-gray-900"
                href="/"
              >
                COLABORACIÓN
                <ArrowDropMenu />
              </Link>
              {/* ----OPCIONES ----- */}
              <ul className="absolute left-0 top-full w-[200px] bg-white shadow-lg rounded hidden group-hover:block p-6 z-10">
                <li className=" hover:text-gray-800 py-2">
                  <Link href="/">ECONÓMICA</Link>
                </li>
                <li className=" hover:text-gray-800 py-2">
                  <Link href="/">CON MATERIALES</Link>
                </li>
                <li className=" hover:text-gray-800 py-2">
                  <Link href="/">VOLUNTARIO</Link>
                </li>
                <li className=" hover:text-gray-800 py-2">
                  <Link href="/">HOGAR DE TRÁNSITO</Link>
                </li>{" "}
                <li className=" hover:text-gray-800 py-2">
                  <Link href="/">SERVICIO DE AYUDA</Link>
                </li>
                <li className=" hover:text-gray-800 py-2">
                  <Link href="/">TIENDAS QUE COLABORAN</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="hover:text-gray-900" href="/">
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <button
            type="button"
            className="bg-[#6c5ce7] py-1 px-4 rounded-full text-white hover:bg-[#6c5ce7d6] shadow-xl"
          >
            DONÁ AHORA
          </button>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-3xl md:hidden"
          >
            {showMenu ? <RadixIconsCross2 /> : <TablerMenu2 />}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
