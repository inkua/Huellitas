import Hero from "./components/Hero/Hero";
import History from "./components/History/History";
import Sumate from "./components/Sumate/Sumate";
import FAQ_Adopcion from "./components/FAQ_Adopcion/FAQ_Adopcion";
import FAQ_Colaboracion from "./components/FAQ_Colaboracion/FAQ_Colaboracion";


export default function Home() {
    return (
        <main className="">
            <Hero />
            <History />
            <Sumate />
            <FAQ_Adopcion />
            <FAQ_Colaboracion />
        </main>
    )
}
