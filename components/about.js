import Image from "next/image"
import shap1 from "../images/banner-shape1.png"
import shap2 from "../images/banner-shape2.png"
import shap3 from "../images/banner-shape3.png"
import shap4 from "../images/abt_01.png"
import shap5 from "../images/abt_02.png"
import shap6 from "../images/abt_03.png"
import shap7 from "../images/play_black.png"
// import vid from '../public/caravanvid.mp4';
// import vid2 from '../public/newvid.mp4';
import { useTranslation } from 'react-i18next';

const About = (props) => {
    const  {t}  = useTranslation();
    return (
        <div>
            <div className="bred_crumb" id="aboutus">
          <div className="container">
            <span className="banner_shape1"> <Image width={20} height={20} src={shap1} alt="image" /> </span>
            <span className="banner_shape2"> <Image width={20} height={20} src={shap2} alt="image" /> </span>
            <span className="banner_shape3"> <Image width={20} height={20} src={shap3} alt="image" /> </span>
    
            <div className="bred_text">
              <h1>{t('aboutCom')}</h1>
              
            </div>
          </div>
        </div>
    
    
        <section className="row_am app_solution_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
           
                <div className="app_text">
                  <div className="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                    <h2>{t('comtitle')}</h2>
                  </div>
                  <p data-aos="fade-up" data-aos-duration="1500">
                  {t('descCom')}                     
                  </p>
                  
                </div>
              </div>
              <div className="col-lg-6">
                <div className="app_images" data-aos="fade-in" data-aos-duration="1500">
                  <ul>
                    <li>
                    <div className="video-container" style={{padding:'0'}}>
                {/* <video
                width={'100%'}
                    controls
                    autoPlay
                    loop
                    muted
                    className=""
                >
                    <source src={vid} type="video/mp4"/>
                    <source src={vid} type="video/ogg" />
                    Your browser does not support the video tag.
                </video> */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/C-NxBMIC22o?si=zzXqGw1mKhxo4uqc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            </div>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
           
          </div>
          
        </section>
        </div>
 
    
    )
}

export default About;