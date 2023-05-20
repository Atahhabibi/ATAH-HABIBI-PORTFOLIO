import React, { useState } from "react";
import Slider from "react-slick";
import Blog from "./Blog";


const AutoPlay = () => {
  const [settings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: "linear"
    
  });

  return (
    <div>
      <Slider {...settings}>
        <Blog />

        <Blog />

        <Blog />

        <Blog />

        <Blog />

        <Blog />
      </Slider>
    </div>
  );
};


export default AutoPlay;
