// VerticalSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Mousewheel } from 'swiper';

// Install modules
SwiperCore.use([Mousewheel]);

const VerticalSlider = ({ images }) => {
  return (
    <div className="relative h-48 overflow-hidden">
      <Swiper
        direction="vertical"
        slidesPerView={3}
        spaceBetween={5}
        mousewheel
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img src={image} alt={`Logo ${index}`} className="h-16" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VerticalSlider;
