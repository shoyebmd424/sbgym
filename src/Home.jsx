import React from 'react'
import Footer from './components/footer/Footer';
import Hero from './components/Hero/Hero';
import Program from './components/Hero/program/Program';
import Plan from './components/plan/Plan';
import Reason from './components/reason/Reason';
import Testimonial from './components/testimonial/Testimonial';

function Home() {
  return (
    <>
      <Hero/>
     <Program/>
     <Reason/>
     <Plan/>
     <Testimonial />
     <Footer/>
    </>
  )
}

export default Home;
