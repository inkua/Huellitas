import Image from "next/image";
import CopyButton from "./CopyButton";


const DonaDineroContent = ({ onClose }) => {
  return (
    (
      <div className="w-[80%] md:w-[70%] lg:w-[35%] max-h-[95%] bg-white rounded-3xl overflow-y-clip relative p-6 md:p-12 lg:p-14" role="contentInfo">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="text-center">
            <h2 className="par-1 !font-semibold">TRANSFERENCIAS</h2>
            <p className="par-3 justify-center text-center">Elegí el monto que puedas donar y haz una transfrencia a cualquiera de las siguientes cuentas:</p>
          </div>

          <div className="flex flex-col items-center w-full gap-6">
            <div className="flex items-center flex-row">
              <div className="flex items-center flex-row gap-2">
                <div className="w-[50%] flex justify-left">
                  <Image src="/assets/Colaboracion/PayPalLogo.svg" alt="PayPalLogo" width={150} height={150} className="w-full md:w-[80%] lg:w-[90%]" />
                </div>
                <div className="flex justify-start gap-4 items-center">
                  <CopyButton text={'huellitasctgna@outlook.com'} />
                  <div className="flex flex-col">
                    <p className="par-3 flex">huellitasctgna</p>
                    <p className="par-3 flex">@outlook.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center flex-row gap-2">
              <div className="w-[50%] flex justify-left">
                <Image src="/assets/Colaboracion/daviplata-logo.png" alt="PayPalLogo" width={150} height={150} className="w-full md:w-[80%] lg:w-[90%]" />
              </div>
              <div className="flex justify-start gap-4 items-center">
                <CopyButton text={'3152078686'} />
                <div className="flex flex-col">
                  <p className="par-3 flex">3152078686</p>
                </div>
              </div>
            </div>

            <div className="flex items-center flex-row gap-2">
              <div className="w-[50%] flex justify-left">
                <Image src="/assets/Colaboracion/nequi-logo.png" alt="PayPalLogo" width={150} height={150} className="w-full md:w-[80%] lg:w-[90%]" />
              </div>
              <div className="flex justify-start gap-4 items-center">
                <CopyButton text={'3148176348'} />
                <div className="flex flex-col">
                  <p className="par-3 flex">3148176348</p>
                </div>
              </div>
            </div>

            <div className="flex items-center flex-row gap-2">
              <div className="w-[50%] flex justify-left">
                <Image src="/assets/Colaboracion/bancolombia_logo.png" alt="PayPalLogo" width={150} height={150} className="w-full md:w-[80%] lg:w-[90%]" />
              </div>
              <div className="flex justify-start gap-4 items-center">
                <CopyButton text={'08500009646'} />
                <div className="flex flex-col">
                  <p className="par-3 flex">CA 08500009646</p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <p className="text-[11px] text-primaryFont primaryFont indent-4 text-center mx-auto">Envianos tu comprobante a <span className="font-bold">@huellitascartagena </span>para llevar cuentas organizadas</p>
            </div>
          </div>
        </div>
        {/* 
          <div className="w-full text-center pt-6 flex flex-col justify-center items-center gap-2">
            <h2 className="par-1 font-semibold">PADRINO</h2>
            <p className="par-3">Si querés donar todos los meses, haz click en el siguiente enlace:</p>
            <button type="button" className="w-fit primary-btn">QUIERO SER PADRINO</button>
          </div>
        */}
        <div className="absolute top-2 right-4 heading-2 cursor-pointer hover:text-primaryColor duration-200" onClick={onClose}>✖</div>
      </div>

    ))
}

export default DonaDineroContent