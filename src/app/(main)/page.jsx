import Hero from "./components/Hero/Hero";
import History from "./components/History/History";
import Sumate from "./components/Sumate/Sumate";
import FAQ_Home from "./components/FAQ_Adopcion/FAQ_Home";

export default function Home() {
    return (
        <main className="">
            <Hero />
            <History />
            <Sumate />
            <FAQ_Home />
        </main>
    )
}
