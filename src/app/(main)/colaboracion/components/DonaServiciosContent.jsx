const DonaServiciosContent = () => {
  return (
    <div className="overflow-y-auto max-w-[800px] flex flex-col justify-center items-center lg:gap-10 gap-0 lg:px-12 px-2">
        <div className="py-8 rounded-lg p-2">
          <h2 className="heading-2 font-semibold">ESTERILIZACIONES</h2>
          <p className="par-3">
            Autorizamos atención médica en las veterinarias con las que tenemos convenio y así mismo esterilizamos. 
          </p>
        </div>
    
        <div className="bg-primaryColor rounded-lg p-2 py-8 ">
          <h2 className="text-h2-m lg:text-h2-w md:text-h2-w font-semibold">HOGAR DE PASO</h2>
          <p className="text-p3-m lg:text-p3-w md:text-p3-w">
            También puedes unirte a nuestro grupo de voluntariado donde nos ayudarán en las diferentes actividades pro fondo que tengamos, también siendo hogar de paso. 
          </p>
        </div>

        <div className="rounded-lg p-2 py-8">
          <h2 className="heading-2 font-semibold">HOGAR DE PASO</h2>
            <p className="par-3">
              También puedes unirte a nuestro grupo de voluntariado donde nos ayudarán en las diferentes actividades pro fondo que tengamos, también siendo hogar de paso. 
            </p>
        </div>

    </div>
  );
};

export default DonaServiciosContent;
