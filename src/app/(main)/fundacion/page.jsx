import { NuestraHistoria } from "../components/NuestraHistoria/NuestraHistoria.jsx";
import { Mision } from "../components/Mision/Mision.jsx";
import { Vision } from "../components/Vision/Vision.jsx";
import { Objetivos } from "../components/Objetivos/Objetivos.jsx";
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
