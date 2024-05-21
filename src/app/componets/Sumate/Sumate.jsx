import Image from 'next/image'; 
import girlDogDesktop from '../../../../public/assets/Sumate/girlDogDesktop.png';
import girlDogMobile from '../../../../public/assets/Sumate/girlDogMobile.png';
function Sumate() {
  return (
    <div className="flex justify-center bg-violetHtas">
      <div className="flex items-center w-full xl:w-4/5 bg-girlDogMobile bg-[length:200px_250px] bg-right-bottom bg-no-repeat md:bg-none relative "> 
        <div className="flex-1  absolute bottom-0 end-0">
          <Image src={girlDogMobile} alt="ImageMobile"/>
        </div>
        <div className="flex-1">
          <div className="text-white px-6 py-4 rounded-lg mb-6 text-left md:text-justify xl:text-2xl">
            <p className="text-lg md:text-3xl font-semibold font-[Poppins] ">TU TAMBIÉN PUEDES AYUDAR</p>
          </div>

          <div>
            
          </div>
          <div className="w-full px-6 py-4 rounded-lg mb-6 hidden md:grid  md:grid-cols-1 md:grid-rows-1">

            <input type="text" placeholder="Escribe tu nombre completo" className="w-full xl:w-10/12 px-4 py-2 bg-white rounded-full border border-gray-300 mb-4 placeholder-gray-500 text-black" /> 
            <div>
              <input type="text" placeholder="Danos un número para contactarte" className="w-full xl:w-9/12 px-4 py-2 bg-white rounded-full border border-gray-300 mr-2 placeholder-gray-500 text-black" /> 
              <input type="text" placeholder="Dejanos tu mail" className="w-full xl:w-8/12 px-4 py-2 bg-white rounded-full border border-gray-300 placeholder-gray-500 text-black" />
            </div>
            
            <button className="hidden md:flex px-1 py-2 w-10/12 xl:w-56 bg-transparent border border-white text-white rounded-full mb-6 mx-auto">MMMMMMM MMMMM MMMMMmm</button>
            <button className="hidden md:flex px-1 py-2 w-10/12 xl:w-56 bg-transparent border border-white text-white rounded-full mb-6 mx-auto">MMMMMMMMMMM MMMMMMM mMMMMM</button>
          </div>

          <div className=" md:hidden grid grid-cols-1 grid-rows-1 px-2 py-4 rounded-lg mb-6 gap-between space-y-4">
            
            <input type="text" placeholder="Nombre completo" className="w-3/5 xl:w-10/12 px-4 py-2 bg-white rounded-full border border-gray-300 mb-4 placeholder-gray-500 text-black" /> 
            <input type="text" placeholder="Celular" className="w-2/5 xl:w-10/12  px-4 py-2 bg-white rounded-full border border-gray-300 mr-2 placeholder-gray-500 text-black" /> 
            <input type="text" placeholder="Mail" className="w-2/5 xl:w-10/12  px-4 py-2 bg-white rounded-full border border-gray-300 placeholder-gray-500 text-black" />
            <button className="px-1 py-2 w-5/12 h-11 bg-transparent border border-white text-white rounded-full text-left font-[Poppins] text-sm">QUIERO SER PADRINO</button>
            <button className="px-1 py-2 w-6/12 h-11 bg-transparent border border-white text-white rounded-full text-left font-[Poppins] text-sm"> QUIERO SER VOLUNTARIO </button>
          </div>

        </div>
        <div className="flex-1 hidden xl:flex xl:justify-center xl:mx-auto">
          <Image src={girlDogDesktop} alt="ImageDesktop"/>
        </div>
        
      </div>
        
    </div>
  );
}

export default Sumate;
