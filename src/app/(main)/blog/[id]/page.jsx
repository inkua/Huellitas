import { getStoryById } from "@/services/services";
import Image from "next/image";

import History from "../../components/History/History";


export async function generateMetadata({ params }) {
   const id = params.id
   const story = await getStoryById(id);
   let metadata = {}

   if (story.data) {
      metadata = {
         title: `${story.data.nombre} | Huellitas Cartagena`,
         description: story.data.entradilla,
      }
   }

   return metadata
}


async function Story({ params }) {
   const { id } = params;

   const story = await getStoryById(id);

   return (
      <main className="text-black p-4 w-full max-w-screen-2xl mx-auto h-full font-[Poppins]">
         {story.data ? (
            <>
               <section className="w-[90%] lg:w-9/12 mx-auto">
                  <figure className="relative w-full aspect-video max-h-[320px] lg:max-h-[370px]">
                     <Image
                        className="rounded-3xl object-cover object-center mb-[11px]"
                        src={story.data.imagen}
                        fill
                        alt="Imagen de historia"
                        sizes="100%"
                     />
                  </figure>
                  <span className="italic text-[11px] md:text-[20px]">
                     {story.data.nombre + (story.data.fecha ? ", " + story.data.fecha : "")}
                  </span>
               </section>

               <article
                  id="blogArticle"
                  className="w-[90%] lg:w-9/12 mx-auto mt-[27px]"
                  dangerouslySetInnerHTML={{ __html: story.data.articulo }}
               >
               </article>
            </>
         ) : (
            <section className="w-[90%] lg:w-9/12 mx-auto flex items-center  gap-x-[5px]">
               <div className="w-[24px] aspect-square bg-error-icon bg-contain bg-no-repeat"></div>
               <h1 className="text-[#A90000] font-[Poppins] font-normal text-xl">Historia no encontrada</h1>
            </section>
         )}

         <History />
      </main>
   );
}

export default Story;
