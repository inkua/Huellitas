import Image from "next/image"
import History from "../../components/History/History"

import { getStoryById } from "@/services/services"

async function Story({ params }) {
    const { id } = params

    const story = await getStoryById(id)

    return (
        <main className="text-black p-4 w-full max-w-screen-2xl mx-auto h-full font-[Poppins]">
            {story.data ?
            <>
                <section className="w-[90%] lg:w-9/12 mx-auto">
                    <figure className="relative w-full aspect-video max-h-[320px] lg:max-h-[370px]">
                        <Image 
                        className="rounded-3xl object-cover object-center mb-[11px]"
                        src={story.data.imagen}
                        fill
                        alt="pet image"/>
                    </figure>
                    <span className="italic text-[11px] md:text-[20px]">{story.data.nombre}, Escrito por Chavely Lizcano Alvarez Huellitas Cartagena _ 30/7/2024</span>
                </section>

                <article id="blogArticle" className="w-[90%] lg:w-9/12 mx-auto mt-[27px]" dangerouslySetInnerHTML={{ __html: story.data.articulo }} >
                    {/* se renderiza el articulo */}
                </article>
            </>
            
            :

            <section className="w-[90%] lg:w-9/12 mx-auto">
                <h1>Historia no encontrada {':('}</h1>
            </section>
            }

            <History />
        </main>
    )
}

export default Story
