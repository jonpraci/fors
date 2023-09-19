// components/VideoComponent.js
import React from 'react';
import vid from '../public/caravanvid.mp4';
import vid2 from '../public/newvid.mp4';
import { useTranslation } from 'react-i18next';
function VideoComponent() {
    const { t } = useTranslation();
    
    return (
        <div className='pair_content2'>
            <div className="video-container">
                <video
                    controls
                    autoPlay
                    loop
                    muted
                    className="video"
                >
                    <source src={vid2} type="video/mp4"/>
                    <source src={vid2} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='left_side'>
                <h2>{t('titlrVid')}</h2>
                <p>{t('vidContent')}</p>
            </div>

        </div>
    );
}

export default VideoComponent;
