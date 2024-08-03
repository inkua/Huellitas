'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import CardC from '../../colaboracion/components/Card'
import CardH from '../History/Card'
import CardColab from '../../colaboracion/components/Colab'
import 'swiper/css/navigation'
import 'swiper/css/bundle'
import 'swiper/css'
import './custom-swiper-bullet.css'

function Slider({ items, type, def, lg, md, nav = false, loop = false }) {
    return (
        <Swiper modules={[Navigation]}
            navigation={nav}
            slidesPerView={def} breakpoints={{ 1024: { slidesPerView: lg }, 768: { slidesPerView: md } }}
            spaceBetween={15}
            loop={loop}
            className='w-full lg:w-9/12 cursor-grab !px-[5%] lg:!px-0' >
            {
                items.map(item => (
                    <SwiperSlide key={item.id}>
                        {/** Si es una historia, la informacion viene en un formato diferente / type 0 es una historia */}
                        {type == 0 ? 
                        createItem(type, item.data.imagen, item.data.entradilla, "SABER MAS...", item.action, item.alt) 
                        : 
                        createItem(type, item.source, item.par, item.btn, item.action, item.alt)
                        }
                        
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

const createItem = (type, source, par, btn, action, alt) => {
    const card = [
        <CardH source={source} par={par} btn={btn} />,
        <CardC source={source} btn_txt={btn} onButtonClick={action} />,
        <CardColab source={source} alt={alt} />, 
    ]
    return card[type] || null
}

export default Slider