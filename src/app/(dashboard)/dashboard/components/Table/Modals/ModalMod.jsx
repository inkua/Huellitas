import { uploadImage, delImage } from "@/services/services";

function ModalMod({ item, closeCallback, config }) {
    async function handleClick(e) {
        try {
            e.preventDefault();

            const data = {
                nombre: e.target.title.value,
            };

            let imageUrl;
            if (config.collection != "admins" && e.target.image.files[0]) {
                imageUrl = await uploadImage(e.target.image.files[0]);
                data.imagen = imageUrl;
            }
            if (config.collection != "sponsors") {
                data.descripcion = e.target.description.value;
            }

            await fetch("/api/" + config.collection, {
                method: "PUT",
                body: JSON.stringify({
                    token: "",
                    id: item.id,
                    data: data,
                }),
            });

            await delImage(item.data.imagen);
            closeCallback();
        } catch (e) {
            console.log(e.message);
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
                                {config.collection != "sponsors" && (
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="description"
                                            className="block mb-2 text-sm font-medium text-[#6b6b6b]"
                                        >
                                            Descripcion
                                        </label>
                                        <textarea
                                            id="description"
                                            rows="4"
                                            className="block p-2.5 w-full text-sm text-[#6b6b6b] rounded-lg"
                                            placeholder="Descripción"
                                            required
                                            defaultValue={item.data.descripcion}
                                        ></textarea>
                                    </div>
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
