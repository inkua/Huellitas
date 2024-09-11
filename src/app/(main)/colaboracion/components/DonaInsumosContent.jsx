const DonaInsumosContent = ({ onClose }) => {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[60%] max-h-[95%] bg-white rounded-3xl p-6 md:p-12 lg:p-14 relative flex flex-col justify-center items-center">
      <div className="flex flex-col w-full gap-8 overflow-y-auto">
        <div className="w-full">
          <h3 className="heading-2">MEDICAMENTOS</h3>
          <p className="w-full par-3 mt-4 text-justify">
            Amoxidal, Metronidazol, Cefalexina, Prendisona, Furosemide, Enalapril, Tramadol (comprimidos o inyectable), Farmaconal, Ondasetron, Previcox, Karsivan, Morfina.
          </p>
        </div>

        <div className="w-full">
          <h2 className="heading-2">INSUMOS MATERIALES</h2>
          <p className="w-full par-3 mt-2 text-justify">
            Hilo vicril nro 1, jeringas de 2,5, 5, 20 y 60 ml, agujas rosadas, abocat azules 22 y naranjas 14, campos 1 x 1 estériles, algodón y gasas, guantes de revisión M y guantes de cirugía 7,5, papel de cocina o similar para el quirófano, agua oxigenada, iodofon, alcohol, Cloroxilenol, Espadol, suero fisiológico, protectores para cama ReadyBed (venden en pañaleras), abrigo, productos de limpieza, baldes, escobas y lampazos, diarios.          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-primaryColor rounded-3xl mt-8 py-4 px-4 lg:px-20 w-full">
        <h2 className="par-1 !text-white !font-semibold">¿DÓNDE RECIBIMOS LAS DONACIONES?</h2>
        <div>
          <p className="par-2 !text-white">Para coordinar las donaciones, por favor contactarnos por medio de nuestras redes sociales o escribenos un correo a la dirección huellitasctgna@outlook.com</p>
        </div>

       {/*  <p className="par-3 !text-white text-justify">*En caso de ser cosas grandes, como ser casillas, carretillas, etc, coordinar por mail huellitasctgna@outlook.com</p> */}

      </div>
      <div className="absolute top-2 right-4 heading-2 cursor-pointer hover:text-primaryColor duration-200" onClick={onClose}>✖</div>
    </div >
  );
};

export default DonaInsumosContent;
