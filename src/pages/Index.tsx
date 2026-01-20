
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Products from '../components/home/Products';
import Testimonials from '../components/home/Testimonials';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Contact from '../components/home/Contact';
import HelmetWrapper from '../components/seo/HelmetWrapper';

const Index = () => {
  return (
    <Layout>
      <HelmetWrapper
        title="Aluraf - Pergole i Zadaszenia Aluminiowe | Producent"
        description="Nowoczesne pergole, zadaszenia tarasowe i carporty aluminiowe. Producent z własnym montażem na terenie całej Polski. Jakość i precyzja wykonania."
        keywords="pergole, zadaszenia tarasowe, carporty, aluminium, zadaszenia aluminiowe, pergole lamelowe, markizy, rolety zip"
      />
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
