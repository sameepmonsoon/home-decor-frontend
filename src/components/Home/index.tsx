import React from 'react';

import Newsletter from '../Common/Newsletter';
import BestSeller from './BestSeller';
import Categories from './Categories';
import CounDown from './Countdown';
import Hero from './Hero';
import NewArrival from './NewArrivals';
import PromoBanner from './PromoBanner';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <NewArrival />
      <PromoBanner />
      <BestSeller />
      <CounDown />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
