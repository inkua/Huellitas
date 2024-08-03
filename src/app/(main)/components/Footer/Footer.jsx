"use client";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full mt-auto mx-auto ">
      <div className="w-full bg-primaryColor ">
        <div className="flex justify-around items-center max-w-screen-2xl mx-auto flex-col md:flex-row h-full md:h-[250px]  gap-4 py-16 md:gap-0 md:py-0">
          <div className="hidden md:flex flex-col flex-grow basis-0 items-center">
            <Image
              className="py-4 pointer-events-none w-[300px] "
              src={"https://res.cloudinary.com/dorljfo6v/image/upload/v1718048248/huellitas/logo2_b5nm5v.svg"}
              alt="logo"
              height={700}
              width={700}
            />
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
                  href="https://x.com/huellitasctg2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="hover:scale-125 h-8 w-8 duration-200"
                    src={"/assets/logos/svg/x.svg"}
                    alt="X"
                    height={80}
                    width={80}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[40px] bg-[#585564] flex justify-center items-center font-medium text-sm md:text-base">
        <p>
          Diseño y Programación:
          <Link
            href="https://inkua.de/"
            className="font-bold hover:text-[#034C8C] hover:bg-white rounded-bl-3xl rounded-tr-3xl px-3 duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            InkuA
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;