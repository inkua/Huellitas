import Image from "next/image"
import History from "../../components/History/History"

const stories = [
    {
        id: 1,
        title: 'title example',
        article: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic culpa illo consequuntur voluptatum nisi numquam ea molestias, itaque blanditiis earum magni unde nesciunt. Sint provident voluptates culpa similique illo repellendus.'
    },
    {
        id: 2,
        title: 'title example 2',
        article: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic culpa illo consequuntur voluptatum nisi numquam ea molestias, itaque blanditiis earum magni unde nesciunt. Sint provident voluptates culpa similique illo repellendus.'
    },
    {
        id: 3,
        title: 'title example 3',
        article: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic culpa illo consequuntur voluptatum nisi numquam ea molestias, itaque blanditiis earum magni unde nesciunt. Sint provident voluptates culpa similique illo repellendus.'
    },
]

async function Story({ params }) {
    const { id } = params

    const peticion = async (id) => {
        return stories.find((item) => (item.id == id))
    }

    const story = await peticion(id)

    return (
        <main className="text-black p-4 w-full max-w-screen-2xl mx-auto h-full font-[Poppins]">
            <section className="w-[90%] lg:w-9/12 mx-auto">
                <figure className="relative w-full aspect-video max-h-[320px] lg:max-h-[370px]">
                    <Image 
                    className="rounded-3xl object-cover object-center mb-[11px]"
                    src={'https://firebasestorage.googleapis.com/v0/b/prueba-huellitas.appspot.com/o/images%2FDOGO%20ARGENTINO940X470%201%20TEMPERAMENTO.png.webp_1722956559715?alt=media&token=66a31194-e8ed-4cf7-ac67-a541a157067c'}
                    fill
                    alt="pet image"/>
                </figure>
                <span className="italic text-[11px] md:text-[20px]">Escrito por Chavely Lizcano Alvarez Huellitas Cartagena _ 30/7/2024</span>
            </section>

            <article className="w-[90%] lg:w-9/12 mx-auto mt-[27px]">
                <h1>HISTORIA DE MILANESO</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                </p>
            </article>

            <History />
        </main>
    )
}

export default Story
