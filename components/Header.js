import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../images/logo_trans.png'
import arFlag from '../images/ar-flag.png';
import enFlag from '../images/en-flag.png'
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Header(props) {
    const  {t}  = useTranslation();

    const [toggel, setToggel] = useState(true);
    // const [dir, setDir] = useState('rtl');
    const toggelMenu = () => {
        setToggel((prev) => !prev)
    }
    // const changeLanguage = (lng, dir) => {
    //     i18n.changeLanguage(lng);
    //     setDir(dir)
    // };

    return (

        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg" style={{ direction: props.dir }} >
                    <div className='pair-mob-nav'>
                        <a className="navbar-brand" href="#" >
                            <Image
                                priority={true}
                                src={logo}
                                alt='lkjhvghjkl'
                                width={150}
                                height={51}
                            />
                        </a>
                        <button onClick={toggelMenu} className="navbar-toggler hide_desc" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <div className="toggle-wrap">
                                    <span className="toggle-bar"></span>
                                </div>
                            </span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={toggel ? 'navbar-nav ml-auto show' : 'navbar-nav ml-auto'} style={{ direction: 'rtl', justifyContent: props.dir == 'rtl' ? 'end' : 'start', flexDirection: props.dir == 'rtl' ? 'row' : 'row-reverse', padding: '0 10px' }} >
                            <li className="nav-item has_dropdown">
                                <a className="nav-link" href="#home" >{t('home')}</a>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link" href="#aboutus" >{t('about')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#fqaa" >{t('fqa')}</a>
                            </li>



                            <li className="nav-item">
                                <a className="nav-link" href="#contact"> {t('contact')}</a>
                            </li>
                            <Grid container gap='10px' style={{ width: 'auto', padding: '10px', alignItems: 'center' }}>
                                <div
                                    style={{ cursor: 'pointer', padding: '10px' }}
                                    onClick={() => props.changeLanguage('ar', 'ltr')}
                                >
                                    <Image
                                        priority={true}
                                        src={enFlag}
                                        alt='lkjhvghjkl'
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <div
                                    style={{ cursor: 'pointer', padding: '10px' }}
                                    onClick={() => props.changeLanguage('en', 'rtl')}
                                >
                                    <Image
                                        priority={true}
                                        src={arFlag}
                                        alt='lkjhvghjkl'
                                        width={25}
                                        height={20}
                                    />
                                </div>

                            </Grid>
                        </ul>
                    </div>




                </nav>
            </div>
        </header>

        // <AppBar position="static" style={{ background: '#fdfcff' }}>
        //     <Toolbar>
        //         <Grid alignContent='center'>
        //             <Image
        //                 priority={true}
        //                 src={logo}
        //                 alt='lkjhvghjkl'
        //                 width={150}
        //                 height={51}
        //             />
        //         </Grid>
        //         <div style={{ flexGrow: 1 }} /> {/* Spacing */}
        //         <a href='#' className='header-link' color="inherit">
        //             الرئيسيه
        //         </a>
        //         <a href='#' className='header-link' color="inherit">
        //             عنا
        //         </a>
        //         <a href='#' className='header-link' color="inherit">
        //             السياسه والخصوصيه
        //         </a>
        //         <a href='#' className='header-link' color="inherit">
        //             تواصل معنا
        //         </a>
        //         <Grid container gap='10px' style={{ width: 'auto', padding: '10px', alignItems: 'center' }}>
        //             <div
        //                 style={{ cursor: 'pointer', padding: '10px' }}
        //                 onClick={() => changeLanguage('ar')}
        //             >
        //                 <Image
        //                     priority={true}
        //                     src={arFlag}
        //                     alt='lkjhvghjkl'
        //                     width={25}
        //                     height={20}
        //                 />
        //             </div>
        //             <div
        //                 style={{ cursor: 'pointer', padding: '10px' }}
        //                 onClick={() => changeLanguage('en')}
        //             >
        //                 <Image
        //                     priority={true}
        //                     src={enFlag}
        //                     alt='lkjhvghjkl'
        //                     width={25}
        //                     height={25}
        //                 />
        //             </div>

        //         </Grid>
        //     </Toolbar>
        // </AppBar>
    );
}

export default Header;
