import Image from 'next/image';
import Accord from '../Accordion/Accordion';

function FAQ_Adopcion_2({ items }) {
    return (
        <div id='preguntas-frecuentes' className="container w-full lg:w-4/5 mx-auto p-4 lg:p-2 font-[Poppins]">

            <div className="text-left mb-4 ">
                <h2 className="text-lg text-primaryFont">Adopción</h2>
                <h1 className="text-lg lg:text-3xl font-semibold  text-primaryFont">PREGUNTAS FRECUENTES</h1>  
            </div>

            <div className="flex flex-col lg:flex-row items-start"> 
                <div className="mb-4 lg:mb-0 lg:mr-4 w-full lg:w-1/2 lg:hidden">
                    <Image src={"/assets/FAQs/Woman_sign_mobile.png"} width={100} height={100}  className="rounded-lg w-full" alt="Sing dog Mobile" />
                </div>
                
                <Image src={"/assets/FAQs/Woman_sign_desktop.png"}  width={400} height={400}  className="rounded-xl lg:mb-4 lg:ml-4 lg:w-4/12 hidden lg:block lg:mr-7" alt="Sing dog desktop" />
                
                <div className="w-full lg:w-full flex flex-col space-y-4">
                        <Accord items={items} />
                    </div>
                </div>
            </div>
    )
}

export default FAQ_Adopcion_2;