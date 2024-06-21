import CRUD from "@/services";
import Table from "./components/Table/Table";

async function Dashboard() {
    try {
        const stories = await CRUD.getStories();
        return (
            <div>
                <Table data={stories} />
            </div>
        );
    } catch (e) {
        console.log(e);
        return <h2>Ha ocurrido un error al cargar las historias.</h2>;
    }
}

export default Dashboard;
