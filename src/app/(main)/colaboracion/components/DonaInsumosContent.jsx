const DonaInsumosContent = () => {
  return (
    <div className="overflow-y-auto max-w-[800px] flex flex-col justify-center items-center gap-5 px-3 lg:px-12">
      <div className="flex lg:gap-6 flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <h2 className="heading-2 font-semibold py-8">MEDICAMENTOS </h2>
          <ul className="par-3 list-disc list-inside">
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

        <div className="lg:w-1/2">
          <h2 className="heading-2 font-semibold py-8">MATERIALES</h2>
          <ul className="par-3 list-disc list-inside">
            <li> Hilo vicril nro 1</li>
            <li>Jeringas de 2,5, 5, 20 y 60 ml</li>
            <li>Agujas rosadas</li>
            <li>Abocat azules 22 y naranjas 14</li>
            <li>Campos 1 x 1 estériles</li>
            <li>Algodón y gasas</li>
            <li>Guantes de revisión M y guantes de cirugía 7,5</li>
            <li>Papel de cocina o similar para el quirófano</li>
            <li>Agua oxigenada, iodofon, alcohol</li>
            <li>Cloroxilenol, Espadol</li>
            <li>Suero fisiológico</li>
            <li>Protectores para cama ReadyBed, venden en pañaleras</li>
            <li>Abrigo</li>
            <li>Productos de limpieza, baldes, escobas y lampazos</li>
            <li>Diarios</li>
          </ul>
        </div>
      </div>

      <div className="bg-primaryColor rounded-3xl py-2 px-4 my-4 w-full">
        <h2 className="pb-4">¿DÓNDE RECIBIMOS LAS DONACIONES?</h2>
        <p className="py-1 font-light">Dirección de huellitas cartagena</p>
        <p className="py-1 font-light">Lunes a viernes de X a X hs.</p>
        <p className="py-1 font-light">En caso de ser cosas grandes, como ser casillas, carretillas, etc, coordinar por mail axxxxx@xxxxx.com</p>

      </div>

    </div>
  );
};

export default DonaInsumosContent;
