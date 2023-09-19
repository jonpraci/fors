import '@/styles/globals.css'
import React from 'react';
import { appWithTranslation } from 'next-i18next';
import i18n from '../i18n'; 
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
