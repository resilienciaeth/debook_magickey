import React from 'react';
import Header from '../components/Header';
import Whatis from '../components/Whatis';
import Utilities from '../components/Utilities';
import Price from '../components/Price';
import Percentages from '../components/Percentages';
import Future from '../components/Future';
import Creators from '../components/Creators';
import Getyours from '../components/Getyours';
import Ourwhy from '../components/Ourwhy';
import Limited from '../components/Limited';
import Comparation from '../components/Comparation';
import Footer from '../components/Footer';

const index = () => (
  <div className='font-creato min-h-screen max-h-screen bg-[#121212]'>
    <Header />
    <Whatis />
    <Utilities />
    <Price />
    <Limited />
    <Comparation />
    <Percentages />
    <Future />
    <Ourwhy />
    <Creators />
    <Getyours />
    <Footer />
  </div>
);

export default index;
