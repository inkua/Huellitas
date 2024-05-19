import Image from 'next/image';
import Peting_dog_desktop from '../../../../public/assets/FAQs/Peting_dog_desktop.png';
import Peting_dog_mobile from '../../../../public/assets/FAQs/Peting_dog_mobile.png';





function FAQ_Colaboracion() {
    return (
        <div class="container w-full md:w-4/5 mx-auto p-4 md:p-2">


            <div class="text-left mb-4">
                <h2 class="text-lg text-blackHtas">Colaboración</h2>
                <h1 class="text-lg md:text-3xl font-semibold text-blackHtas">PREGUNTAS FRECUENTES</h1>
                
            </div>

            <div class="flex flex-col md:flex-row items-start"> 
                <div class="mb-4 md:mb-0 md:mr-4 w-full md:w-1/2 md:hidden">
                    <Image src={Peting_dog_mobile} class="rounded-lg w-full" alt="woman sign" />
                </div>
                
                <div class="w-full md:w-full flex flex-col space-y-4 h-full ">

                    <button class="flex justify-between items-center p-2 border border-gray-300 bg-colorTerciario rounded-full shadow-md">
                        <span class='text-blackHtas font-[Poppins] text-xs md:text-lg'>¿Cuál es la edad mínima para ser voluntario?</span>
                        <svg class="h-6 w-6 text-gray-800 mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                    </button>
                    <button class="flex justify-between items-center p-2 border border-gray-300 bg-colorTerciario rounded-full shadow-md">
                        <span class='text-blackHtas font-[Poppins] text-xs md:text-lg'>¿Necesito alguna formación o experiencia previa?</span>
                        <svg class="h-6 w-6 text-gray-800 mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                    </button>
                    <button class="flex justify-between items-center p-2 border border-gray-300 bg-colorTerciario rounded-full shadow-md">
                        <span class='text-blackHtas font-[Poppins] text-xs md:text-lg'>¿Qué actividades puedo realizar como voluntario?</span>
                        <svg class="h-6 w-6 text-gray-800 mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                    </button>

                    <button class="flex justify-between items-center p-2 border border-gray-300 bg-colorTerciario rounded-full shadow-md">
                        <span class='text-blackHtas font-[Poppins] text-xs md:text-lg'>¿Cuál es la diferencia entre padrino y voluntario?</span>
                        <svg class="h-6 w-6 text-gray-800 mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="16" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
                    </button>
											  
				</div>
                
                <Image src={Peting_dog_desktop} class="rounded-xl md:mb-4  md:w-4/12 hidden md:block md:ml-7" alt="woman sign" />
                
  
            
            </div>
           
        </div>
    );
}

export default FAQ_Colaboracion;