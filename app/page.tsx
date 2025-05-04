'use client'

import React from 'react';
import Header from './components/home/header';
import Hero from './components/home/hero';
import HowItWorks from './components/home/how-it-works';
import Feature from './components/home/feature';
import Testimonials from './components/home/testimonials';
import CTA from './components/home/cta';
import Footer from './components/home/footer';
import { useAuth } from './hooks/use-auth';
import LoginForm from './components/auth/login-form';
import Modal from './components/common/modal/modal';

const Home: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  return (
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
  )
}

export default Home;
