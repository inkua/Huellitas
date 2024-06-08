'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import 'swiper/css'
import CardC from '../../colaboracion/components/Card'
import CardH from '../History/Card'

function Slider({ items, type, def, lg, md }) {
    return (
        <Swiper slidesPerView={def} breakpoints={{ 1024: { slidesPerView: lg }, 768: { slidesPerView: md }}} spaceBetween={15} className='w-full lg:w-9/12 px-4 lg:px-0 cursor-grab'>
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

function createItem(type, source, par, btn, action)
{
    let div
    if(type === 1){
        div = (
            div = (<CardH source={source} par={par} btn={btn} />)
        )
    } else {
        div = (<CardC source={source} btn_txt={btn} onButtonClick={action} />)
    }
    return div
}

export default Slider