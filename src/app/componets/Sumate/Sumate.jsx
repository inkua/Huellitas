import Image from 'next/image'; 
import girlDog from '../../../../public/svg/GirlDog.svg';

function Sumate() {
  return (
    <div className="flex justify-center bg-violetHtas ">
      <div className="flex items-center w-full xl:w-4/5 bg-violetHtas"> 
        <div className="flex-1">
          <div className="text-white px-6 py-4 rounded-lg mb-6 text-center xl:text-justify xl:text-2xl">
            <p className="text-3xl font-semibold">TU TAMBIÉN PUEDES AYUDAR</p>
          </div>
          <div className="px-6 py-4 rounded-lg mb-6">
            <input type="text" placeholder="Escribe tu nombre completo" className="w-full xl:w-10/12 px-4 py-2 bg-white rounded-full border border-gray-300 mb-4 placeholder-gray-500 text-black" /> 
            <div className="xl:flex gap-between space-y-4 xl:space-y-0">
              <input type="text" placeholder="Danos un número para contactarte" className="w-full xl:w-9/12 px-4 py-2 bg-white rounded-full border border-gray-300 mr-2 placeholder-gray-500 text-black" /> 
              <input type="text" placeholder="Dejanos tu mail" className="w-full xl:w-8/12 px-4 py-2 bg-white rounded-full border border-gray-300 placeholder-gray-500 text-black" />
            </div>
          </div>
          <div className='grid grid-cols-1 gap-1 xl:grid-cols-3 xl:gap-14  ps-5 xl:space-x-14 text-sm'>
            <button className="px-1 py-2 w-10/12 xl:w-56 bg-transparent border border-white text-white rounded-full mb-6 mx-auto">QUIERO SER VOLUNTARIO</button>
            <button className="px-1 py-2 w-10/12 xl:w-56 bg-transparent border border-white text-white rounded-full mb-6 mx-auto">QUIERO SER PADRINO</button>
          </div>
        </div>
        <div className="flex-1 hidden xl:flex xl:justify-end xl:mx-auto">
          <Image src={girlDog} alt="Image"/>
        </div>
      </div>
    </div>
  );
}

export default Sumate;
