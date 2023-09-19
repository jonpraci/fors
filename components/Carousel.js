
import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/parallax'
// import 'swiper/css/pagination'
// SwiperCore.use([Navigation, Pagination, Autoplay]);

function MyCarousel() {
  
  return (
    <Swiper
    modules={[Navigation, Pagination,Autoplay]}
    parallax={true}
    controller={false}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000, 
        // disableOnInteraction: true,
      }}
      
    >
      <SwiperSlide>
        <Image priority='priority' width='100%' height={400} src={image2} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image priority='priority' width='100%' height={400} src={image1} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <Image priority='priority' width='100%' height={400} src={image3} alt="Slide 3" />
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
}

export default MyCarousel;

