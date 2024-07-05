import Image from "next/image";

const DonaDineroContent = () => {
  return (
    (
        <div className="flex flex-col items-center lg:flex-col-reverse max-w-[700px]">
          <div className="text-center lg:text-start lg:w-[70%]">
            <h2 className="heading-1 font-semibold">TRANSFERENCIA BANCARIA</h2>
            <p className="par-3">Doná el importe que quieras directamente en nuestra cuenta</p>
            <p className="par-3 font-semibold py-4">Cta Ahorros Bancolombia: 08500009646</p>
            <p className="par-3 py-3">no olvides enviarnos el comprobante para llevar cuentas organizadas</p>

            <div className="hidden lg:flex lg:gap-4">
              <p className="par-3 max-w-[300px]">Hacete padrino si quieres donar todos los meses</p>
              <button className="text-p3-m lg:text-p3-w md:text-p3-w px-5 py-2 lg:py-1 md:py-1 font-medium text-white bg-primaryColor hover:bg-secondaryColor rounded-full shadow-grey-400 shadow-md max-h-8">QUIERO SER PADRINO</button>

            </div>
          </div>

          <div className="flex flex-col items-center space-y-4 py-4 w-[80%]  lg:w-full">

            <div className="flex flex-col items-center py-4 gap-4 lg:flex-row lg:gap-24">
              <div>
              <Image src="/assets/Colaboracion/PayPalLogo.svg" alt="PayPal" width={150} height={150} />
              </div>
            
              <button className="text-p3-m lg:text-p3-w md:text-p3-w px-5 py-2 lg:py-1 md:py-1 font-medium text-white bg-primaryColor hover:bg-secondaryColor rounded-full shadow-grey-400 shadow-md">DONÁ AHORA</button>
            </div>
            <div className="flex flex-col items-center py-4 gap-4 lg:flex-row lg:gap-24">
              <div>
              <Image src="/assets/Colaboracion/daviplata-logo.png" alt="PayPal" width={150} height={150} />

              </div>
            
              <button className="text-p3-m lg:text-p3-w md:text-p3-w px-5 py-2 lg:py-1 md:py-1 font-medium text-white bg-primaryColor hover:bg-secondaryColor rounded-full shadow-grey-400 shadow-md">DONÁ AHORA</button>
            </div>
            <div className="flex flex-col items-center py-4 gap-4 lg:flex-row lg:gap-24">
              <div>
              <Image src="/assets/Colaboracion/nequi-logo.png" alt="PayPal" width={150} height={150} />

              </div>
            
              <button className="text-p3-m lg:text-p3-w md:text-p3-w px-5 py-2 lg:py-1 md:py-1 font-medium text-white bg-primaryColor hover:bg-secondaryColor rounded-full shadow-grey-400 shadow-md">DONÁ AHORA</button>
            </div>
          </div>
        </div>
      )  )
}

export default DonaDineroContent