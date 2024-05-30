import Hero from "./componets/Hero/Hero";
import History from "./componets/History/History";
import Sumate from "./componets/Sumate/Sumate";
import FAQ_Adopcion from "./componets/FAQ_Adopcion/FAQ_Adopcion";
import FAQ_Colaboracion from "./componets/FAQ_Colaboracion/FAQ_Colaboracion";


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
