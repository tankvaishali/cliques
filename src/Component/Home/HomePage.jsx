import React from 'react';
import HOC from '../Main/HOC';
import WhyChoose from './WhyChoose';
import "../../assets/Css/HomeCss.css"
import Aboutus from './Aboutus';
import Slider from './Slider';
import Testimonial from './Testimonial';

function HomePage() {
  return (
   <>
   <Slider/>
   <Aboutus/>
   <WhyChoose/>
   <Testimonial/>
   </>
  );
}

export default HOC(HomePage);
