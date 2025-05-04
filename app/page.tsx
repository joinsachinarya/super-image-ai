import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import HowItWorks from '../components/how-it-works';
import Feature from '../components/feature';
import Testimonials from '../components/testimonials';
import CTA from '../components/cta';
import Footer from '../components/footer';

const Home: React.FC = () => (
  <>
    <Header />
    <main>
      <Hero />
      <HowItWorks />
      <Feature />
      <Testimonials />
      <CTA />
    </main>
    <Footer />
  </>
);

export default Home;
