const DonaServiciosContent = ({onClose}) => {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[50%] max-h-[95%] p-6 md:p-12 lg:p-14 bg-white rounded-3xl relative flex flex-col justify-center items-center">
      <div className="">
        <h2 className="heading-2 font-semibold">ESTERILIZACIONES</h2>
        <p className="par-3">
          Autorizamos atención médica en las veterinarias con las que tenemos convenio y así mismo esterilizamos.
        </p>
      </div>
      <div className="rounded-lg p-2 py-8">
        <h2 className="heading-2 font-semibold">HOGAR DE PASO</h2>
        <p className="par-3">
          También puedes unirte a nuestro grupo de voluntariado donde nos ayudarán en las diferentes actividades pro fondo que tengamos, también siendo hogar de paso.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center bg-primaryColor rounded-lg py-4 px-4 lg:px-20 gap-4">
        <h2 className="par-2 !text-white font-semibold w-full">¿CÓMO PUEDO PRESTAR LOS SERVICIOS?</h2>
        <p className="par-3 !text-white">
          Otra forma es unirte a nuestro grupo de padrinos mensual, donde solo pedimos una donación de $10.000,00 por mes para poder cubrir las cuentas pendientes de este mismo.          </p>
      </div>

      <div className="absolute top-2 right-4 heading-2 cursor-pointer hover:text-primaryColor duration-200" onClick={onClose}>✖</div>


    </div>
  );
};

export default DonaServiciosContent;
