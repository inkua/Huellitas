import CRUD from "@/services";
import SponsorsTable from "../components/Table/SponsorsTable";

async function Sponsors() {
    try {
        const sponsors = await CRUD.getSponsors();
        return (
            <div>
                <h2 className="text-xl mb-4 font-bold tracking-tight text-gray-900">
                    Sponsors
                </h2>
                <SponsorsTable data={sponsors} />
            </div>
        );
    } catch (e) {
        console.log(e);
        return <h2>Ha ocurrido un error al cargar los sponsors.</h2>;
    }
}

export default Sponsors;
