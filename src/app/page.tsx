'use client';

import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import SectionCulture from './components/SectionCulture';
import SectionEcosystem from './components/SectionEcosystem';
import SectionHero from './components/SectionHero';
import SectionLastNews from './components/SectionLastNews';
import SectionNetwork from './components/SectionNetwork';
import SectionOutServices from './components/SectionOutServices';

const HomePage = () => {
  return (
    <main className='bg-[#0F0D11]'>
      <Header />
      <SectionHero />
      <SectionNetwork />
      <SectionLastNews />
      <SectionOutServices />
      <SectionCulture />
      <SectionEcosystem />
      <Footer />
    </main>
  );
};

export default HomePage;
