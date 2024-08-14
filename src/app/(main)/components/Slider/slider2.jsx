'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardColab from '../../colaboracion/components/Colab'
import 'swiper/css/pagination'
import 'swiper/css'

function Slider({ items, type, def, lg, md }) {
    return (
        <Swiper loop={true} slidesPerView={def} breakpoints={{ 1024: { slidesPerView: lg }, 768: { slidesPerView: md } }} spaceBetween={15} className='w-full lg:w-6/12 cursor-grab slide-image-reference ' >
                {
                    items.map(item => (
                        <SwiperSlide key={item.id}>
                            {createItem(type, item.data.imagen, "Sponsor de nombre: " + item.data.nombre)}
                        </SwiperSlide>
                    ))
                }
        </Swiper>
    )
}

const createItem = (type, source, alt) => {
    const card = [

        <CardColab source={source} alt={alt} />, 
    ]
    return card[type] || null
}

export default Slider