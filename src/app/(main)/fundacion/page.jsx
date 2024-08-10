import { Mision } from "./components/Mision/Mision.jsx";
import { NuestraHistoria } from "./components/NuestraHistoria/NuestraHistoria.jsx";
import { Objetivos } from "./components/Objetivos/Objetivos.jsx";
import { Vision } from "./components/Vision/Vision.jsx";

function Fundacion() {
    return (
        <main>
            <title>Fundación | Huellitas Cartagena</title> 
            <NuestraHistoria />
            <Mision />
            <Vision />
            <Objetivos />
        </main>
    );
}

export default Fundacion;
