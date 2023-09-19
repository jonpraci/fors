import { useTranslation } from 'react-i18next';
import MyCarousel from './Carousel';
import VideoComponent from './VideoComponent';
import MyCarouselX2 from './multi-carousel';
import About from './about';
import Contact from './Contact';
function Content(props) {
    const  {t}  = useTranslation();
  return (
  <>
    <section style={{textAlign:'center'}} className='pair_home' id='home'>
      <div>
      <h2>{t('landingPageTitle')}</h2>
      <p>{t('landingPageSubtitle')}</p>
      
      </div>
      <MyCarousel />
    </section>
    <section className='pair_vid' style={{direction:props.dir}}>
    <VideoComponent />
    </section>
    <section className='pair_carousel row_am interface_section' id='fqaa'>
        <MyCarouselX2 />
    </section>
    <section style={{direction:props.dir}} id='about'>
    <About />
    </section>
    <section style={{direction:props.dir}}  id="contact">
    <Contact />
    </section>
    </>
  );
}

export default Content;
