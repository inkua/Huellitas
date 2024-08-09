import { uploadImage, delImage } from "@/services/services";

function ModalMod({ item, closeCallback, config }) {
    async function handleClick(e) {
        try {
            e.preventDefault();

            const htmlTag = document.getElementsByTagName("html")[0];
            htmlTag.classList.add("!cursor-wait");
            htmlTag.classList.add("pointer-events-none");

            const data = {
                nombre: e.target.title.value,
            };

            let imageUrl;
            if (config.collection != "admins" && e.target.image.files[0]) {
                imageUrl = await uploadImage(e.target.image.files[0]);
                data.imagen = imageUrl;
            }

            if (config.collection == "adopciones") {
                data.caracteristicas = e.target.characteristics.value;
                data.edad = e.target.age.value;

                const gender = parseInt(e.target.gender.value);
                data.genero = gender;

                data.historia = e.target.story.value;
                data.type = parseInt(e.target.anio.value);
            }

            await fetch("/api/" + config.collection, {
                method: "PUT",
                body: JSON.stringify({
                    token: "",
                    id: item.id,
                    data: data,
                }),
            });

            if (e.target.image.files[0]) {
                await delImage(item.data.imagen);
            }

            htmlTag.classList.remove("!cursor-wait");
            htmlTag.classList.remove("pointer-events-none");

            closeCallback();
        } catch (e) {
            console.log(e.message);
            htmlTag.classList.remove("!cursor-wait");
            htmlTag.classList.remove("pointer-events-none");
        }
    }

    return (
        <>
            <div
                id="crud-modal"
                className=" overflow-y-auto bg-[#ffffff80] flex overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-[#f2f0fd] rounded-lg shadow ">
                        <div className="flex items-center rounded-t-xl border-2 border-primaryColor justify-between p-4 md:p-5">
                            <h3 className="text-lg font-semibold text-[#6b6b6b]">
                                Modificar
                            </h3>
                            <button
                                onClick={closeCallback}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="crud-modal"
                            >
                                <svg
                                    className="w-3 h-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form
                            onSubmit={handleClick}
                            className="border-2 border-t-0 rounded-b-xl border-primaryColor p-4 md:p-5"
                        >
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label
                                        htmlFor="title"
                                        className="block mb-2 text-sm font-medium text-[#6b6b6b]"
                                    >
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="border border-gray-300 text-[#6b6b6b] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Nombre"
                                        required
                                        defaultValue={item.data.nombre}
                                    ></input>
                                </div>

                                {config.collection == "adopciones" && (
                                    <>
                                        <div className="col-span-2">
                                            <label
                                                htmlFor="characteristics"
                                                className="block mb-2 text-sm font-medium text-[#6b6b6b]"
                                            >
                                                Características
                                            </label>
                                            <textarea
                                                id="characteristics"
                                                rows="4"
                                                className="border border-gray-300 text-[#6b6b6b] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                placeholder="Características"
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="col-span-2">
                                            <label
                                                htmlFor="age"
                                                className="block mb-2 text-sm font-medium text-[#6b6b6b]"
                                            >
                                                Edad
                                            </label>
                                            <input
                                                type="number"
                                                id="age"
                                                className="border border-gray-300 text-[#6b6b6b] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                placeholder="0"
                                                required
                                            ></input>
                                            <select
                                                className="block py-2 mr-0 px-4 mt-4 mb-2 text-sm font-medium text-[#6b6b6b] bg-white"
                                                name="anio"
                                                id="anio"
                                            >
                                                <option value="0">Años</option>
                                                <option value="1">
                                                    Meses
                                                </option>
                                            </select>
                                        </div>
                                        <div className="col-span-2">
                                            <label
                                                htmlFor="gender"
                                                className="block mb-2 text-sm font-medium text-[#6b6b6b]"
                                            >
                                                Género
                                            </label>
                                            <select
                                                className="block py-2 px-4 mb-2 text-sm font-medium text-[#6b6b6b] bg-white"
                                                name="gender"
                                                id="gender"
                                            >
                                                <option value="1">Macho</option>
                                                <option value="0">
                                                    Hembra
                                                </option>
                                            </select>
                                        </div>
                                        <div className="col-span-2">
                                            <label
                                                htmlFor="story"
                                                className="block mb-2 text-sm font-medium text-[#6b6b6b]"
                                            >
                                                Historia
                                            </label>
                                            <textarea
                                                id="story"
                                                rows="4"
                                                className="border border-gray-300 text-[#6b6b6b] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                placeholder="Historia"
                                                required
                                            ></textarea>
                                        </div>
                                    </>
                                )}

                                {config.collection != "admins" && (
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="image"
                                            className="block mb-2 text-sm font-medium text-[#6b6b6b]"
                                        >
                                            Imagen
                                        </label>
                                        <input
                                            className="block mb-2 text-sm font-medium text-[#6b6b6b]"
                                            type="file"
                                            name="image"
                                            id="image"
                                        />
                                    </div>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Modificar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalMod;
