import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlickSlider from 'react-slick';

function Slider() {
  const sliders = [
    {
      img: "https://exomac.jamstacktemplates.dev/images/hero-image/hero-2.jpg"
    },
    {
      img: "https://exomac.jamstacktemplates.dev/images/hero-image/hero-1.jpg"
    },
    {
      img: "https://exomac.jamstacktemplates.dev/images/hero-image/hero-3.jpg"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container relative">
      <SlickSlider {...settings} >
        {sliders.map((slider, index) => (
          <div key={index} className="slider-item relative">
            <img src={slider.img} alt={`slide ${index + 1}`} />
            <div className="image-overlay absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(3, 15, 39, 0.7)] to-[rgba(3, 15, 39, 0)] pointer-events-none"></div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
}

export default Slider;