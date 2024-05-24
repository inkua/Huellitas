import AddPetForm from './addPetForm/AddPetForm';
import RemovePetForm from './removePetForm/RemovePetForm';

function Admin() {
    return (
        <section className="flex flex-wrap justify-center gap-24 p-10 text-black">
            <div>
                <h2 className="text-xl mb-6 font-bold">Agregar una mascota</h2>
                <AddPetForm />
            </div>
            <div>
                <h2 className="text-xl mb-6 font-bold">Eliminar una mascota</h2>
                <RemovePetForm />
            </div>
        </section>
    );
}

export default Admin;
