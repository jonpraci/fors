
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import image1 from '../images/in1.png'
import image2 from '../images/in2.png'
import image3 from '../images/in3.png'
import image4 from '../images/in4.png'
import image5 from '../images/in5.png'
import image6 from '../images/in6.png'
import image7 from '../images/in7.png'
import image8 from '../images/in8.png'
import image9 from '../images/in9.png'
import image10 from '../images/in10.png'
import { useTranslation } from 'react-i18next';

// import image2 from '../images/in2.png'
// import image3 from '../images/in3.png'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { useEffect,useState } from 'react';
function MyCarouselX2() {
    const isClient = typeof window === 'object';
    const [windowSize, setWindowSize] = useState({
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    });
  
    useEffect(() => {
      if (!isClient) {
        return false;
      }
  
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [isClient]);
    console.log(windowSize);
    const  {t}  = useTranslation();
  return (
    <div className="container-fluid">
        <div className="section_title" >
                <h2>{t('productTitle')}</h2>
                <p>
                  {t('ourproductlin1')}
                </p>
                <p>
                  {t('ourproductlin2')}
                </p>
            </div>
    <Swiper
    className='mult-swiper'
    modules={[Navigation, Pagination,Autoplay]}
    controller={false}
      spaceBetween={30}
      slidesPerView={ windowSize.width > '767' ?  3 : 1}
      navigation
      pagination={{clickable: true }}
      autoplay={{
        delay:3000
      }}
      
    >
      <SwiperSlide>
        <Image priority='priority' width='100%' height={400} src={image1} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image priority='priority' width='100%' height={400} src={image2} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <Image priority='priority' width='100%' height={400} src={image3} alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <Image priority='priority' width='100%' height={400} src={image4} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image priority='priority' width='100%' height={400} src={image5} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <Image priority='priority' width='100%' height={400} src={image6} alt="Slide 3" />
      </SwiperSlide>
      {/* <SwiperSlide>
        <Image priority='priority' width='100%' height={400} src={image7} alt="Slide 1" />
      </SwiperSlide> */}
      <SwiperSlide>
        <Image priority='priority' width='100%' height={400} src={image8} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <Image priority='priority' width='100%' height={400} src={image9} alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <Image priority='priority' width='100%' height={400} src={image10} alt="Slide 3" />
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
    </div>
  );
}

export default MyCarouselX2;

