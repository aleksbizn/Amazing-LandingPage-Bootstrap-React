import React from 'react';
import { images } from '../../constants';
import {IconScroll} from '../../components';
import './Hero.css';


const logos = ["logo01", "logo02", "logo03", "logo04", "logo05", "logo06"];

const Hero = () => {

  return (
    <div className="hero">
      {/* <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <h1 className="title"> Hey, my name is Manya. I'm illustrator.  </h1>
          <p className="py-4">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
          <button className="btn-positivus">Смотреть мои работы</button>
        </div>
        <div className="col-md-6 col-12 mt-md-0 mt-4">
          <img className="img-fluid" src={images.hero} alt="design" />
        </div>
      </div> */}

<div className="row pt-4">
  <div className="col-md-6 col-12">
    <h1 className="title"> Hey, my name is Manya. I'm illustrator.  </h1>
  </div>
  <div className="col-md-6 col-12 d-flex align-items-center">
    <div>
      <p className="py-4">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
      <button className="btn-positivus">Works</button>
    </div>
  </div>
</div>
<div className="row">
  <div className="col-12 mt-5">
    <img className="img-fluid" src={images.hero} alt="design" />
  </div>
</div>
      
      <div className="clients">
      {logos.map((logo, index) => (
      <img
        key={index}
        src={images[logo]}
        alt={images[logo]}
      />
    ))}
  
      </div>
      <IconScroll />
    </div>
    
  )
}

export default Hero