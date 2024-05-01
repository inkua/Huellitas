import SVGFacebook from "../../../../public/svg/facebook.svg";
import SVGInstagram from "../../../../public/svg/instagram.svg";
import SVGX from "../../../../public/svg/x.svg";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full absolute bottom-0 mt-auto">
      {/* SECTION VIOLETA */}
      <div className="flex justify-around items-center flex-col md:flex-row h-full md:h-[250px] bg-violetHtas rounded-t-[50px] gap-4 py-8 md:gap-0 md:py-0">
        {/* REDES SOCIALES */}
        <div className="flex flex-col flex-grow basis-0 justify-start">
          <div className="text-center">
            <p className="text-sm font-medium">
              Síguenos en nustras redes sociales
            </p>
            <div className="flex justify-center items-center gap-4 mt-9">
              <Image
                className="hover:scale-125 h-8 w-8"
                src={SVGFacebook}
                alt="Facebook"
                height={80}
                width={80}
              />
              <Link
                href="https://www.instagram.com/huellitas.ctgna/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="hover:scale-125 h-8 w-8"
                  src={SVGInstagram}
                  alt="Instagram"
                  height={80}
                  width={80}
                />
              </Link>
              <Image
                className="hover:scale-125 h-8 w-8"
                src={SVGX}
                alt="X"
                height={80}
                width={80}
              />
            </div>
          </div>
        </div>
        {/* LINKS RAPIDOS */}
        <div className="hidden md:block w-auto min-w-52 flex text-center justify-center">
          <ul className="flex flex-col gap-2">
            <li className="hover:font-bold">
              <Link href="/">FUNDACIÓN</Link>
            </li>
            <li className="hover:font-bold">
              <Link href="/">ADOPCIÓN</Link>
            </li>
            <li className="hover:font-bold">
              <Link href="/">COLABORACIÓN</Link>
            </li>
            <li className="hover:font-bold">
              <Link href="/">PREGUNTAS FRECUENTES</Link>
            </li>
            <li className="hover:font-bold">
              <Link href="/">CONTACTO</Link>
            </li>
          </ul>
        </div>
        {/* NEWSLETTER */}
        <div className="flex flex-col flex-grow basis-0 items-center">
          <form className="bg-[#f9f9f9] rounded-2xl w-80 h-[175px] flex flex-col justify-center items-center gap-4 px-6">
            <p className="text-blackHtas font-medium">
              ¡Suscríbete y recibe las novedades!
            </p>
            <input
              type="text"
              name="emailNewsletter"
              placeholder="Ingresa tu e-mail aquí"
              className="w-full p-1 px-4 border border-gray-400 rounded placeholder-gray-400 text-blackHtas focus:border-violetHtas focus:outline-none "
            />
            <button
              type="submit"
              className="w-full h-8 bg-violetHtas rounded font-semibold text-sm shadow-gray-400 shadow-md"
            >
              SUSCRÍBETE
            </button>
          </form>
        </div>
      </div>
      {/* SECTION GRAY */}
      <div className="h-[40px] bg-grayHtas flex justify-center items-center font-medium">
        <p>
          Diseño y Programación:
          <Link
            href="https://inkua.de/"
            className="font-bold hover:text-[#034C8C] hover:bg-white rounded-bl-3xl rounded-tr-3xl px-3"
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
