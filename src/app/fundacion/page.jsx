import { NuestraHistoria } from "../componets/NuestraHistoria/NuestraHistoria.jsx";
import { Mision } from "../componets/Mision/Mision.jsx";
import { Vision } from "../componets/Vision/Vision.jsx";
import { Objetivos } from "../componets/Objetivos/Objetivos.jsx";
function Fundacion() {
  return (
    <main>
      {/* <h1>Fundación</h1> */}
      <NuestraHistoria />
      <Mision/>
      <Vision/>
      <Objetivos/>
      
    </main>
  );
}

export default Fundacion;
