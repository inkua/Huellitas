import Image from "next/image";

const DonaDineroContent = () => {
  return (
    (
      <div>
          <div className="flex flex-col items-center lg:flex-col-reverse max-w-[700px] border-b border-black">
            <div className="text-center lg:text-start lg:w-[70%] ">
              <h2 className="heading-1 font-semibold">TRANSFERENCIAS</h2>
              <p className="par-3 p3-m primaryFont indent-4 justify-center">Elegí el monto que puedas donar y haz una transfrencia a cualquiera de las siguientes cuentas:</p>


              <div className="hidden lg:flex lg:gap-4">
                <p className="par-3 max-w-[300px]">Hacete padrino si quieres donar todos los meses</p>
                <button className="text-p3-m lg:text-p3-w md:text-p3-w px-5 py-2 lg:py-1 md:py-1 font-medium text-white bg-primaryColor hover:bg-secondaryColor rounded-full shadow-grey-400 shadow-md max-h-8">QUIERO SER PADRINO</button>

              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 py-4 w-full">
              <div className="flex items-center py-4 gap-4 flex-row lg:gap-24 mr-4">
                <div className="w-[30%]">
                  <Image src="/assets/Colaboracion/PayPalLogo.svg" alt="PayPal" width={150} height={150} />
                </div>
                <div className="flex gap-4 w-[20%]">             
                  <p className="par-3">huellitasctgna@outlook.com</p>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">  <path fill="black" d="M21 8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19a.32.32 0 0 0-.09 0a.88.88 0 0 0-.33-.11H10a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V9zm-6-3.53L17.59 8H16a1 1 0 0 1-1-1ZM15 19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1v7a3 3 0 0 0 3 3h5Zm4-4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 3 3h3Z"></path></svg>
                  </button>  
                </div>
              </div>
              <div className="flex items-center py-4 gap-4 flex-row lg:gap-24 ">
                <div className="w-[30%]">
                  <Image src="/assets/Colaboracion/daviplata-logo.png"  alt="PayPal" width={150} height={150} />
                </div>
                <div className="flex gap-4 w-[20%]">             
                  <p className="par-3">3152078686</p>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">  <path fill="black" d="M21 8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19a.32.32 0 0 0-.09 0a.88.88 0 0 0-.33-.11H10a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V9zm-6-3.53L17.59 8H16a1 1 0 0 1-1-1ZM15 19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1v7a3 3 0 0 0 3 3h5Zm4-4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 3 3h3Z"></path></svg>
                  </button>  
                </div>
              </div>
              <div className="flex items-center py-4 gap-4 flex-row lg:gap-24 ">
                <div className="w-[30%]">
                  <Image src="/assets/Colaboracion/nequi-logo.png" alt="PayPal" width={150} height={150} />
                </div>
                <div className="flex gap-4 w-[20%]">             
                  <p className="par-3">3148176348</p>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">  <path fill="black" d="M21 8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19a.32.32 0 0 0-.09 0a.88.88 0 0 0-.33-.11H10a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V9zm-6-3.53L17.59 8H16a1 1 0 0 1-1-1ZM15 19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1v7a3 3 0 0 0 3 3h5Zm4-4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 3 3h3Z"></path></svg>
                  </button>  
                </div>
              </div>
              <div className="flex items-center py-4 gap-4 flex-row lg:gap-24 w-full">
                <div className="w-[43%]">
                  <Image src="/assets/Colaboracion/bancolombia_logo.png" alt="PayPal" width={150} height={150} />
                </div>
                <div className="flex gap-4 w-[94%]">             
                  <p className="par-3 line-clamp-1 w-2/3"> CA 08500009646</p>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">  <path fill="black" d="M21 8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19a.32.32 0 0 0-.09 0a.88.88 0 0 0-.33-.11H10a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V9zm-6-3.53L17.59 8H16a1 1 0 0 1-1-1ZM15 19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1v7a3 3 0 0 0 3 3h5Zm4-4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 3 3h3Z"></path></svg>
                  </button>  
                </div>
              </div>
            </div>
            <p className="par-3 primaryFont indent-4 text-center mb-10">Envianos tu comprobante a <strong>@huellitascartagena </strong>para llevar cuentas organizadas</p>
          </div>
          <div className="text-center lg:text-start lg:w-[70%] mt-10">
            <h2 className="heading-1 font-semibold">PADRINO</h2>
            <p className="par-3 p3-m primaryFont indent-4 justify-center mb-5">Si querés donar todos los meses, haz click en el siguiente enlace:</p>
            <button type="button" className="w-4/6 primary-btn">QUIERO SER PADRION</button>

          </div>
      </div>
        
      )  )
}

export default DonaDineroContent