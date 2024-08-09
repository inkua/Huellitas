"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Footer() {
  const [team, setTeam] = useState(false);

  return (
    <footer className="w-full mt-auto mx-auto ">
      <div className="w-full bg-primaryColor ">
        <div className="flex justify-around items-center max-w-screen-2xl mx-auto flex-col md:flex-row h-full md:h-[250px]  gap-4 py-16 md:gap-0 md:py-0">
          <div className="hidden md:flex flex-col flex-grow basis-0 items-center">
            <Link href='/'>
              <Image
                className="py-4 pointer-events-none w-[300px] cursor-pointer"
                src={"https://res.cloudinary.com/dorljfo6v/image/upload/v1718048248/huellitas/logo2_b5nm5v.svg"}
                alt="logo"
                height={700}
                width={700}
              />
            </Link>
          </div>

          <div className="hidden md:flex py-6 md:py-0 w-auto min-w-52  text-center justify-center">
            <ul className="flex flex-col gap-2">
              <li className="hover:font-bold duration-200">
                <Link href="/fundacion">FUNDACIÓN</Link>
              </li>
              <li className="hover:font-bold duration-200">
                <Link href="/adopcion">ADOPCIÓN</Link>
              </li>
              <li className="hover:font-bold duration-200">
                <Link href="/colaboracion">COLABORACIÓN</Link>
              </li>
              <li className="hover:font-bold duration-200">
                <Link href="/adopcion#preguntas-frecuentes">PREGUNTAS FRECUENTES</Link>
              </li>
              <li className="hover:font-bold duration-200">
                <Link href="/contacto">CONTACTO</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col flex-grow basis-0 justify-start">
            <div className="text-center">
              <p className="text-sm font-medium">
                Síguenos en nuestras redes sociales
              </p>
              <div className="flex justify-center items-center gap-4 mt-9 duration-200">
                <Link
                  href="https://www.instagram.com/huellitas.ctgna/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="hover:scale-125 h-8 w-8 duration-200"
                    src={"/assets/logos/svg/instagram.svg"}
                    alt="Instagram"
                    height={80}
                    width={80}
                  />
                </Link>

                <Link
                  href="https://www.facebook.com/Huellitasctg15"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="hover:scale-125 h-8 w-8 duration-200"
                    src={"/assets/logos/svg/facebook.svg"}
                    alt="Facebook"
                    height={80}
                    width={80}
                  />
                </Link>

                <Link
                  href="https://www.tiktok.com/@huellitascartagena?_t=8ogYd9BjdQr&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="hover:scale-125 h-8 w-8 duration-200"
                    src={"/assets/Footer/tiktok.svg"}
                    alt="TikTok"
                    height={80}
                    width={80}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[40px] bg-[#585564] flex justify-center items-center">
        <p className="par-3 !text-white !font-medium">
          Diseño y desarrollo de este sitio Web: {' '}
          <span className="!font-bold">
            <Link href="https://inkua.de/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              InkuA
            </Link>
            {' - '}
            <button onClick={() => setTeam(!team)} className="hover:underline">
              Conocé el equipo
            </button>
          </span>
        </p>
      </div>
      {team && (
        <div className="flex fixed inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="flex fixed inset-0 max-w-screen-2xl mx-auto justify-center items-center gap-8 z-50" role="section">
            <div className="flex flex-col w-[90%] md:w-[70%] lg:w-[50%] gap-6 p-6 lg:p-10 bg-white rounded-3xl shadow-lg relative overflow-hidden overflow-y-auto no-scrollbar">
              <h1 className="heading-1">EQUIPO DE DESARROLLO</h1>

              <div className="flex flex-col md:flex-row w-full justify-center items-start">
                <div className="flex flex-col w-[100%] md:w-[50%] gap-8">
                  <div className="w-[100%] md:w-full">
                    <h2 className="par-1 !font-bold mb-2">Project Manager:</h2>
                    <ul className="flex flex-col gap-2">
                      <li className="flex w-full gap-2">
                        <Image src={'/assets/Footer/linkedin.svg'} width={100} height={100} className="w-4 md:w-5" alt="logo LinkedIn" />
                        <Link href="https://www.linkedin.com/in/avellaneda-agust%C3%ADn-tns/" target="_blank">
                          <h3 className="par-3 !font-medium cursor-pointer hover:underline">Agustín Avellaneda</h3>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="w-[100%] md:w-full mb-8">
                    <h2 className="par-1 !font-bold mb-2">Diseño UX/UI:</h2>
                    <ul className="flex flex-col gap-2">
                      <li className="flex w-full gap-2">
                        <Image src={'/assets/Footer/linkedin.svg'} width={100} height={100} className="w-4 md:w-5" alt="logo LinkedIn" />
                        <Link href="https://www.linkedin.com/in/mar%C3%ADa-florencia-imbrosiano-/" target="_blank">
                          <h3 className="par-3 !font-medium cursor-pointer hover:underline">Maria Florencia Imbrosiano</h3>
                        </Link>
                      </li>

                      <li className="flex w-full gap-2">
                        <Image src={'/assets/Footer/linkedin.svg'} width={100} height={100} className="w-4 md:w-5" alt="logo LinkedIn" />
                        <Link href="https://www.linkedin.com/in/danila-cardinale/" target="_blank">
                          <h3 className="par-3 !font-medium cursor-pointer hover:underline">Danila Cardinale</h3>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col w-full md:w-[50%] gap-10">
                  <div className="w-full">
                    <h2 className="par-1 !font-bold mb-2">Desarrollo:</h2>
                    <ul className="flex flex-col gap-2">
                      <li className="flex w-full gap-2">
                        <Image src={'/assets/Footer/linkedin.svg'} width={100} height={100} className="w-4 md:w-5" alt="logo LinkedIn" />
                        <Link href="https://www.linkedin.com/in/manuel14mds/" target="_blank">
                          <h3 className="par-3 !font-medium cursor-pointer hover:underline">Manuel Esteban Florez Lopez</h3>
                        </Link>
                      </li>

                      <li className="flex w-full gap-2">
                        <Image src={'/assets/Footer/linkedin.svg'} width={100} height={100} className="w-4 md:w-5" alt="logo LinkedIn" />
                        <Link href="https://www.linkedin.com/in/gevegaeche/" target="_blank">
                          <h3 className="par-3 !font-medium cursor-pointer hover:underline">Gonzalo Ezequiel Vega Echeverría</h3>
                        </Link>
                      </li>

                      <li className="flex w-full gap-2">
                        <Image src={'/assets/Footer/linkedin.svg'} width={100} height={100} className="w-4 md:w-5" alt="logo LinkedIn" />
                        <Link href="https://www.linkedin.com/in/faustino-harriague-26532299/" target="_blank">
                          <h3 className="par-3 !font-medium cursor-pointer hover:underline">Faustino Harriague</h3>
                        </Link>
                      </li>

                      <li className="flex w-full gap-2">
                        <Image src={'/assets/Footer/linkedin.svg'} width={100} height={100} className="w-4 md:w-5" alt="logo LinkedIn" />
                        <Link href="https://www.linkedin.com/in/santiago-larrosa-bauz%C3%A1-99b740251/" target="_blank">
                          <h3 className="par-3 !font-medium cursor-pointer hover:underline">Santiago Larrosa Bauzá</h3>
                        </Link>
                      </li>

                      <li className="flex w-full gap-2">
                        <Image src={'/assets/Footer/linkedin.svg'} width={100} height={100} className="w-4 md:w-5" alt="logo LinkedIn" />
                        <Link href="https://www.linkedin.com/in/melani-depetris/" target="_blank">
                          <h3 className="par-3 !font-medium cursor-pointer hover:underline">Melani Depetris</h3>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="absolute top-2 right-4 heading-2 cursor-pointer hover:text-primaryColor duration-200" onClick={() => setTeam(!team)}>✖</div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;