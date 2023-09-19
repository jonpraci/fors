// components/VideoComponent.js
import React from 'react';
// import vid from '../public/caravanvid.mp4';
// import vid2 from '../public/newvid.mp4';
import { useTranslation } from 'react-i18next';
function VideoComponent() {
    const { t } = useTranslation();

    return (
        <div className='pair_content2'>
            <div className="video-container">

                <iframe width="560" height="315" src="https://www.youtube.com/embed/npS1rR27SRs?si=Q2nNXc6jZKwrWjfg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className='left_side'>
                <h2>{t('titlrVid')}</h2>
                <p>{t('vidContent')}</p>
            </div>

        </div>
    );
}

export default VideoComponent;
