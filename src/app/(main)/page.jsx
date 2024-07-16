import Hero from "./components/Hero/Hero";
import History from "./components/History/History";
import Sumate from "./components/Sumate/Sumate";
import FAQ_Adopcion from "./components/FAQ_Adopcion/FAQ_Adopcion";

export default function Home() {
    return (
        <main className="">
            <Hero />
            <History />
            <Sumate />
            <section className="mb-12">
                <FAQ_Adopcion />
            </section>
        </main>
    )
}
