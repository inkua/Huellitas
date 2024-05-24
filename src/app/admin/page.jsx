import AddPetForm from './addPetForm/AddPetForm';
import SelectPetForm from './selectPetForm/SelectPetForm';

function Admin() {
    return (
        <section className="flex flex-wrap w-full justify-center gap-24 p-10 text-black">
            <div>
                <h2 className="text-xl mb-6 font-bold">Agregar una mascota</h2>
                <AddPetForm />
            </div>
            <div>
                <h2 className="text-xl mb-6 font-bold">Buscar mascotas</h2>
                <SelectPetForm />
            </div>
        </section>
    );
}

export default Admin;
