import Image from 'next/image'; 
import girlDog from '../../../../public/svg/GirlDog.svg';

function Sumate() {
  return (
    <div className="flex justify-center bg-violetHtas">
      <div className="flex items-center w-4/5 bg-violetHtas"> 
        <div className="flex-1">
          <div className="text-white px-6 py-4 rounded-lg mb-6">
            <p className="text-3xl font-semibold">TU TAMBIÉN PUEDES AYUDAR</p>
          </div>
          <div className="px-6 py-4 rounded-lg mb-6">
            <input type="text" placeholder="Escribe tu nombre completo" className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300 mb-4 placeholder-gray-500 text-black" /> 
            <div className="flex gap-between">
              <input type="text" placeholder="Danos un número para contactarte" className="w-2/5 px-4 py-2 bg-white rounded-lg border border-gray-300 mr-2 placeholder-gray-500 text-black" /> 
              <input type="text" placeholder="Dejanos tu mail" className="w-2/5 px-4 py-2 bg-white rounded-lg border border-gray-300 placeholder-gray-500 text-black" />
            </div>
          </div>
          <div className='ps-5'>
            <button className="w-48 h-12 bg-transparent border border-white text-white rounded-full mb-6 mx-auto">QUIERO SER VOLUNTARIO</button>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <Image src={girlDog} alt="Image" width={800} height={200} />
        </div>
      </div>
    </div>
  );
}

export default Sumate;
