const DonaInsumosContent = ({ onClose }) => {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[60%] max-h-[95%] bg-white rounded-3xl p-8 relative flex flex-col justify-center items-center">
      <div className="flex w-[90%] lg:gap-4 flex-col lg:flex-row overflow-y-auto">
        <div className="lg:w-[40%]">
          <h2 className="par-1 font-semibold">MEDICAMENTOS </h2>
          <ul className="par-3 list-disc list-inside ml-2">
            <li>Amoxidal</li>
            <li>Metronidazol</li>
            <li>Cefalexina</li>
            <li>Prendisona</li>
            <li>Furosemide</li>
            <li>Enalapril</li>
            <li>Tramadol, comprimidos o inyectable</li>
            <li>Farmaconal</li>
            <li>Ondasetron</li>
            <li>Previcox</li>
            <li>Karsivan</li>
            <li>Morfina</li>
          </ul>
        </div>

        <div className="w-full lg:w-[60%]">
          <h2 className="par-1 font-semibold">MATERIALES</h2>
          <ul className="par-3 list-disc list-inside ml-2">
            <li>Hilo vicril nro 1</li>
            <li>Jeringas de 2,5, 5, 20 y 60 ml</li>
            <li>Agujas rosadas</li>
            <li>Abocat azules 22 y naranjas 14</li>
            <li>Campos 1 x 1 estériles</li>
            <li>Algodón y gasas</li>
            <li>Guantes de revisión M y guantes de cirugía 7,5</li>
            <li>Papel de cocina o similar para el quirófano</li>
            <li>Agua oxigenada, iodofon, alcohol, Cloroxilenol, Espadol</li>
            <li>Suero fisiológico</li>
            <li>Protectores para cama ReadyBed, venden en pañaleras</li>
            <li>Abrigo</li>
            <li>Productos de limpieza, baldes, escobas y lampazos</li>
            <li>Diarios</li>
          </ul>
        </div>
      </div>

      <div className="bg-primaryColor rounded-3xl mt-4 py-2 px-4 w-[90%]">
        <h2 className="pb-4">¿DÓNDE RECIBIMOS LAS DONACIONES?</h2>
        <p className=" font-light">Dirección de huellitas cartagena</p>
        <p className=" font-light">Lunes a viernes de X a X hs.</p>
        <p className=" font-light">En caso de ser cosas grandes, como ser casillas, carretillas, etc, coordinar por mail axxxxx@xxxxx.com</p>

      </div>
      <div className="absolute top-2 right-4 heading-2 cursor-pointer hover:text-primaryColor duration-200" onClick={onClose}>✖</div>

    </div>
  );
};

export default DonaInsumosContent;
