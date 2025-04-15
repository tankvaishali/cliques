import React from 'react';
import HOC from '../Main/HOC';
import WhyChoose from './WhyChoose';
import "../../assets/Css/HomeCss.css"
import Aboutus from './Aboutus';
import Slider from './Slider';
import Testimonial from './Testimonial';
import Counter from './Contact';
import HomeServices from './HomeServices';

function HomePage() {
  return (
    <>
      <Slider />
      <Aboutus />
      <Counter/>
      <WhyChoose />
      <Testimonial />
      <HomeServices />
    </>
  );
}

export default HOC(HomePage)