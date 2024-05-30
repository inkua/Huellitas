import Image from 'next/image'; 
import girlDogDesktop from '../../../../public/assets/Sumate/girlDogDesktop.png';
import girlDogMobile from '../../../../public/assets/Sumate/girlDogMobile.png';
function Sumate() {
  return (
    <div className="flex justify-center bg-primaryColor relative">
        <div className="flex-1 hide bottom-0 end-0 md:absolute md:w-5/12 ">
          <Image src={girlDogDesktop} width={700} height={100} quality={100} style={{ width: '100%', height: 'auto' }} alt="ImageDesktop"/>
        </div>
      <div className="flex items-center w-full  relative "> 
        <div className="flex-1 absolute bottom-0 end-0 w-5/12 sm:w-5/12 md:hidden">
          <Image src={girlDogMobile} width={700} height={100} quality={100} style={{ width: '100%', height: '100%' }} alt="ImageMobile"/>
        </div>


        <div className="flex-1">
          <div className="text-white px-4 py-4 rounded-lg mb-6 text-left md:text-justify">
            <p className="text-h1-m  md:text-h1-w font-semibold font-[Poppins] ">TU TAMBIÉN PUEDES AYUDAR</p>
          </div>

          <div>
            
          </div>
          <div className="w-full px-6 py-4 rounded-lg mb-6 hidden md:grid  md:grid-cols-1 md:grid-rows-1">

            <input type="text" placeholder="Escribe tu nombre completo" className="w-5/12  px-4 py-2 bg-white rounded-full border border-gray-300 mb-4 placeholder-gray-500 text-primaryFont" /> 
            <div>
              <input type="text" placeholder="Danos un número para contactarte" className="w-3/12  px-4 py-2 bg-white rounded-full border border-gray-300 mr-2 placeholder-gray-500 text-primaryFont" /> 
              <input type="text" placeholder="Dejanos tu mail" className="w-3/12 px-4 py-2 bg-white rounded-full border border-gray-300 mr-2 placeholder-gray-500 text-primaryFont grow " />
            </div>
            <div className='py-4'>
              <button className=" w-3/12 h-7 lg:w-2/12 bg-transparent  border-white border-2 text-white rounded-full text-center font-[Poppins] text-p3-m mr-3">QUIERO SER VOLUNTARIO </button>
              <button className="w-3/12 h-7 lg:w-2/12 bg-transparent  border-white border-2 text-white rounded-full text-center font-[Poppins] text-p3-m">QUIERO SER PADRINO</button>
            </div>

          </div>

          <div className=" md:hidden grid grid-cols-1 grid-rows-1 px-2 py-4 rounded-lg mb-6 gap-between space-y-4">
            
            <input type="text" placeholder="Nombre completo" className="w-3/5 md:w-10/12 px-4 py-2 bg-white rounded-full border border-gray-300 mb-4 placeholder-gray-500 text-primaryFont" /> 
            <input type="text" placeholder="Celular" className="w-2/5 md:w-10/12  px-4 py-2 bg-white rounded-full border border-gray-300 mr-2 placeholder-gray-500 text-primaryFont" /> 
            <input type="text" placeholder="Mail" className="w-2/5 md:w-10/12  px-4 py-2 bg-white rounded-full border border-gray-300 placeholder-gray-500 text-primaryFont" />
            <button className="px-1 py-2 w-fit h-12 bg-transparent border border-white text-white rounded-full text-left font-[Poppins] text-p3-m">QUIERO SER PADRINO</button>
            <button className="px-1 py-2 w-fit h-12 bg-transparent border border-white text-white rounded-full text-left font-[Poppins] text-p3-m">QUIERO SER VOLUNTARIO</button>
           
          </div>

        </div>
        
        
      </div>
        
    </div>
  );
}

export default Sumate;
