import { Mision } from "./components/Mision/Mision.jsx";
import { NuestraHistoria } from "./components/NuestraHistoria/NuestraHistoria.jsx";
import { Objetivos } from "./components/Objetivos/Objetivos.jsx";
import { Vision } from "./components/Vision/Vision.jsx";

export const metadata = {
    title: 'Fundación | Huellitas Cartagena',
    description: 'Explora nuestra página de Fundación para conocer en profundidad a Huellitas Cartagena. Aquí te contamos nuestra historia, compartimos nuestra misión y visión, y detallamos los objetivos que nos motivan. Infórmate sobre cómo estamos marcando la diferencia en la vida de los animales y cómo nuestra pasión por el bienestar animal guía cada uno de nuestros esfuerzos.',
};

function Fundacion() {
    return (
        <main>
            <NuestraHistoria />
            <Mision />
            <Vision />
            <Objetivos />
        </main>
    );
}

export default Fundacion;
