// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { i18n } = useTranslation();

  const [dir, setDir] = useState('rtl');
  const changeLanguage = (lng, dir) => {
    i18n.changeLanguage(lng);
    setDir(dir)
};
  return (
    <div >
      <Head>
        <title>فرسان العليا</title>
      </Head>
      <Header changeLanguage={changeLanguage} dir={dir} />
      <Content dir={dir} />
      <Footer />
    </div>
  );
}

export default Home;
