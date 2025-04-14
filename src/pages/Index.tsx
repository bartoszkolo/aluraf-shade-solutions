
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Products from '../components/home/Products';
import Testimonials from '../components/home/Testimonials';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Contact from '../components/home/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <WhyChooseUs />
      <Contact />
    </Layout>
  );
};

export default Index;
