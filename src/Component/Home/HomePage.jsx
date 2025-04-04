import React from 'react';
import HOC from '../Main/HOC';
import WhyChoose from './WhyChoose';
import "../../assets/Css/HomeCss.css"

function HomePage() {
  return (
   <>
   <WhyChoose/>
   </>
  );
}

export default HOC(HomePage);
