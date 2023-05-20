import React, { useState } from "react";
import Slider from "react-slick";
import Blog from "./Blog";

const AutoPlay2 = () => {
  const [settings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  });

  return (
    <div style={{marginBottom:'2rem'}}>
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

export default AutoPlay2;
