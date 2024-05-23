import Image from 'next/image';

import Woman_sign_desktop from '../../../../public/assets/FAQs/Woman_sign_desktop.png';
import Woman_sign_mobile from '../../../../public/assets/FAQs/Woman_sign_mobile.png';

function FAQ_Adopcion() {
    return (
        <div className="container w-full md:w-4/5 mx-auto p-4 md:p-2">


            <div className="text-left mb-4">
                <h2 className="text-lg text-blackHtas">Adopción</h2>
                <h1 className="text-lg md:text-3xl font-semibold text-blackHtas">PREGUNTAS FRECUENTES</h1>  
            </div>

            <div className="flex flex-col md:flex-row items-start"> 
                <div className="mb-4 md:mb-0 md:mr-4 w-full md:w-1/2 md:hidden">
                    <Image src={Woman_sign_mobile} className="rounded-lg w-full" alt="Peting dog desktop" />
                </div>
                
                <Image src={Woman_sign_desktop} className="rounded-xl md:mb-4 md:ml-4 md:w-4/12 hidden md:block md:mr-7" alt="Peting dog desktop" />
                
                <div className="w-full md:w-full flex flex-col space-y-4 h-full ">

                    <button className="flex justify-between items-center p-2 border border-gray-300 bg-colorTerciario rounded-full shadow-md">
                        <span className='text-blackHtas font-[Poppins] text-xs md:text-lg'>¿Cuál es la edad mínima para ser voluntario?</span>
                        <svg className="h-6 w-6 text-gray-800 mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                    </button>
                    <button className="flex justify-between items-center p-2 border border-gray-300 bg-colorTerciario rounded-full shadow-md">
                        <span className='text-blackHtas font-[Poppins] text-xs md:text-lg'>¿Necesito alguna formación o experiencia previa?</span>
                        <svg className="h-6 w-6 text-gray-800 mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                    </button>
                    <button className="flex justify-between items-center p-2 border border-gray-300 bg-colorTerciario rounded-full shadow-md">
                        <span className='text-blackHtas font-[Poppins] text-xs md:text-lg'>¿Qué actividades puedo realizar como voluntario?</span>
                        <svg className="h-6 w-6 text-gray-800 mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                    </button>

                    <button className="flex justify-between items-center p-2 border border-gray-300 bg-colorTerciario rounded-full shadow-md">
                        <span className='text-blackHtas font-[Poppins] text-xs md:text-lg'>¿Cuál es la diferencia entre padrino y voluntario?</span>
                        <svg className="h-6 w-6 text-gray-800 mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                    </button>
                                        
                </div>
                
            
            </div>
           
        </div>
    );
}
export default FAQ_Adopcion;