import Image from "next/image"
import shap1 from "../images/banner-shape1.png"
import shap2 from "../images/banner-shape2.png"
import shap3 from "../images/banner-shape3.png"
import shap4 from "../images/call_icon.png"
import shap5 from "../images/location_icon.png"
import shap6 from "../images/mail_icon.png"
import { use, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

// import shap7 from "../images/banner-shape3.png"
const Contact = () => {
    const  {t}  = useTranslation();

    const [alertcode,  setAlertcode] = useState({text:'' , color:''})
    const btn = useRef('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone:''
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        btn.current.style.opacity = '0'
        try {
          const response = await fetch('http://api.amadoctors.com/api/sendEmail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              message: formData.message,
              phone:formData.phone,
            }),
          });
    
          if (response.ok) {
            // Handle success (e.g., show a success message)
            console.log('Email sent successfully');
            setFormData({
                name: '',
                email: '',
                message: '',
                phone:''
            })
            setAlertcode({text:'Email sent successfully',color:'green'})
            btn.current.style.opacity = '1'
          } else {
            setAlertcode({text:'Email not sent',color:'red'})
            // Handle error (e.g., show an error message)
            console.error('Email not sent');
          }
        } catch (error) {
            setAlertcode({text:error,color:'red'})
          console.error(error);
        }
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
    return <div>
        <div className="bred_crumb" id="contact">
            <div className="container">
                <span className="banner_shape1"> <Image src={shap1} alt="image" /> </span>
                <span className="banner_shape2"> <Image src={shap2} alt="image" /> </span>
                <span className="banner_shape3"> <Image src={shap3} alt="image" /> </span>

                <div className="bred_text">
                    <h1>{t('contact')}</h1>
                    <p>{t('descform')}</p>
                    {/* <ul> */}

                </div>
            </div>
        </div>


        <section className="contact_page_section" >
            <div className="container">
                <div className="contact_inner">
                    <div className="contact_form">
                        <div className="section_title">
                            <h2>{t('leavemassege')}</h2>
                            <p>{t('fill')}</p>
                        </div>
                        <form action="#" onSubmit={handleSubmit}> 
                            <div className="form-group">
                                <input 
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={t('name')}
                                className="form-control"
                                required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={t('mail')}
                                className="form-control"
                                required

                                />
                            </div>
                            {/* <div className="form-group">
                                <input type="text" placeholder="أسم الشركه" className="form-control" />
                            </div> */}
                            
                            <div className="form-group">
                                <input
                                required
                                
                                type="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder={t('phone')}
                                className="form-control"
                                 />
                            </div>
                           
                            <div className="form-group">
                                <textarea 
                                required

                                placeholder={t('massege')}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-control"
                                ></textarea>
                            </div>
                            {/* <div className="form-group term_check">
                                <input type="checkbox" id="term" />
                                <label for="term">أوافق على تلقي رسائل البريد الإلكتروني والنشرات الإخبارية والرسائل الترويجية</label>
                            </div> */}
                            <div className="form-group mb-0 center-btn">
                                <button ref={btn} type="submit" className="btn puprple_btn">{t('send')}</button>
                            </div>
                            <b style={{color:alertcode.color || 'red',textAlign:'center',display:'block'}}>{alertcode.text}</b>
                        </form>
                    </div>
                    <div className="contact_info">

                        <ul className="contact_info_list">
                            <li>
                                <div className="img">
                                    <Image src={shap6} alt="image" />
                                </div>
                                <div className="text">
                                    <span>{t('sendus')}</span>
                                    <a href="mailto:Lujain1ha@gmail.com">Lujain1ha@gmail.com</a>
                                </div>
                            </li>
                            <li>
                                <div className="img">
                                    <Image src={shap4} alt="image" />
                                </div>
                                <div className="text">
                                    <span>{t('callus')}</span>
                                    <a href="tel:059 662 2600">‭059 662 2600‬</a>
                                </div>
                            </li>
                            <li>
                                <div className="img">
                                    <Image src={shap5} alt="image" />
                                </div>
                                <div className="text">
                                    <span>{t('visitus')}</span>
                                    <p>Unnamed Road, الرياض 14274،, Riyadh 14274, Saudi Arabia</p>

                                </div>
                            </li>
                            <li>
                                <section className="row_am map_section" style={{ width: '100%' }}>
                                    <div className="container">
                                        <div className="map_inner">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3626.479434921165!2d46.835693375363924!3d24.641620578072764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM4JzI5LjgiTiA0NsKwNTAnMTcuOCJF!5e0!3m2!1sen!2seg!4v1693876928291!5m2!1sen!2seg" width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>
                                </section>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    </div>
}

export default Contact;