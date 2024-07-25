import Image from "next/image";

const DonaDineroContent = ({onClose}) => {
  return (
    (
      <div className="w-[80%] md:w-[70%] lg:w-[35%] max-h-[95%] bg-white rounded-3xl overflow-y-clip p-4 relative" role="contentInfo">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="text-center">
            <h2 className="par-1 font-semibold">TRANSFERENCIAS</h2>
            <p className="par-3 justify-center text-center">Elegí el monto que puedas donar y haz una transfrencia a cualquiera de las siguientes cuentas:</p>
          </div>

          <div className="flex flex-col items-center w-full pb-6 border-b border-black gap-6">
            <div className="flex items-center flex-row">
              <div className="flex items-center flex-row">
                <div className="w-[50%] flex justify-left">
                  <Image src="/assets/Colaboracion/PayPalLogo.svg" alt="PayPalLogo" width={150} height={150} className="w-full md:w-[80%] lg:w-[90%]" />
                </div>
                <div className="flex justify-start gap-4 items-center">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">  <path fill="black" d="M21 8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19a.32.32 0 0 0-.09 0a.88.88 0 0 0-.33-.11H10a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V9zm-6-3.53L17.59 8H16a1 1 0 0 1-1-1ZM15 19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1v7a3 3 0 0 0 3 3h5Zm4-4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 3 3h3Z"></path></svg>
                  </button>
                  <div className="flex flex-col">
                    <p className="par-3 flex">huellitasctgna</p>
                    <p className="par-3 flex">@outlook.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center flex-row">
              <div className="w-[50%] flex justify-left">
                <Image src="/assets/Colaboracion/daviplata-logo.png" alt="PayPalLogo" width={150} height={150} className="w-full md:w-[80%] lg:w-[90%]" />
              </div>
              <div className="flex justify-start gap-4 items-center">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">  <path fill="black" d="M21 8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19a.32.32 0 0 0-.09 0a.88.88 0 0 0-.33-.11H10a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V9zm-6-3.53L17.59 8H16a1 1 0 0 1-1-1ZM15 19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1v7a3 3 0 0 0 3 3h5Zm4-4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 3 3h3Z"></path></svg>
                </button>
                <div className="flex flex-col">
                  <p className="par-3 flex">3152078686</p>
                </div>
              </div>
            </div>

            <div className="flex items-center flex-row">
              <div className="w-[50%] flex justify-left">
                <Image src="/assets/Colaboracion/nequi-logo.png" alt="PayPalLogo" width={150} height={150} className="w-full md:w-[80%] lg:w-[90%]" />
              </div>
              <div className="flex justify-start gap-4 items-center">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">  <path fill="black" d="M21 8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19a.32.32 0 0 0-.09 0a.88.88 0 0 0-.33-.11H10a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V9zm-6-3.53L17.59 8H16a1 1 0 0 1-1-1ZM15 19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1v7a3 3 0 0 0 3 3h5Zm4-4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 3 3h3Z"></path></svg>
                </button>
                <div className="flex flex-col">
                  <p className="par-3 flex">3148176348</p>
                </div>
              </div>
            </div>

            <div className="flex items-center flex-row">
              <div className="w-[50%] flex justify-left">
                <Image src="/assets/Colaboracion/bancolombia_logo.png" alt="PayPalLogo" width={150} height={150} className="w-full md:w-[80%] lg:w-[90%]" />
              </div>
              <div className="flex justify-start gap-4 items-center">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">  <path fill="black" d="M21 8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19a.32.32 0 0 0-.09 0a.88.88 0 0 0-.33-.11H10a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V9zm-6-3.53L17.59 8H16a1 1 0 0 1-1-1ZM15 19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1v7a3 3 0 0 0 3 3h5Zm4-4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 3 3h3Z"></path></svg>
                </button>
                <div className="flex flex-col">
                <p className="par-3 flex">CA 08500009646</p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <p className="par-3 primaryFont indent-4 text-center mx-auto">Envianos tu comprobante a <span className="font-bold">@huellitascartagena </span>para llevar cuentas organizadas</p>
            </div>
          </div>
        </div>
        <div className="w-full text-center pt-6 flex flex-col justify-center items-center gap-2">
          <h2 className="par-1 font-semibold">PADRINO</h2>
          <p className="par-3">Si querés donar todos los meses, haz click en el siguiente enlace:</p>
          <button type="button" className="w-fit primary-btn">QUIERO SER PADRINO</button>

        </div>
        <div className="absolute top-2 right-4 heading-2 cursor-pointer hover:text-primaryColor duration-200" onClick={onClose}>✖</div>
      </div>

    ))
}

export default DonaDineroContent