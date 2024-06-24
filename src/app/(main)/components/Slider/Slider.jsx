'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardC from '../../colaboracion/components/Card'
import CardH from '../History/Card'
import 'swiper/css/pagination'
import 'swiper/css'

function Slider({ items, type, def, lg, md }) {
    return (
        <Swiper slidesPerView={def} breakpoints={{ 1024: { slidesPerView: lg }, 768: { slidesPerView: md } }} spaceBetween={15} className='w-full lg:w-9/12 cursor-grab !px-[5%] lg:!px-0' >
                {
                    items.map(item => (
                        <SwiperSlide key={item.id}>
                            {createItem(type, item.source, item.par, item.btn, item.action)}
                        </SwiperSlide>
                    ))
                }
        </Swiper>
    )
}

const createItem = (type, source, par, btn, action) => {
    const card = [
        <CardH source={source} par={par} btn={btn} />,
        <CardC source={source} btn_txt={btn} onButtonClick={action} />,
    ]
    return card[type] || null
}

export default Slider