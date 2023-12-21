import React, { useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlickSlider from 'react-slick';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

function Slider() {
  const sliders = [
    {
      img: 'https://exomac.jamstacktemplates.dev/images/hero-image/hero-2.jpg',
    },
    {
      img: 'https://exomac.jamstacktemplates.dev/images/hero-image/hero-1.jpg',
    },
    {
      img: 'https://exomac.jamstacktemplates.dev/images/hero-image/hero-3.jpg',
    },
  ];

  const settings = { //slider ayarları
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderRef = useRef(null); //arrow lar için
  const [isHovered, setIsHovered] = useState(false); //arrowları mouse ile etkinleştirmek için

  const handleMouseEnter = () => { 
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const goToPrevSlide = () => { //önceki resime geçme
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => { //sonraki resime geçme
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div
      className="slider-container relative"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <SlickSlider {...settings} className="relative" ref={sliderRef}>
        {sliders.map((slider, index) => (
          <div key={index} className="slider-item relative">
            <img src={slider.img} alt={`slide ${index + 1}`} className='h-[500px] md:h-full'/>
            <div className="image-overlay absolute top-0 left-0 w-full  bg-gradient-to-r from-[rgba(3, 15, 39, 0.7)] to-[rgba(3, 15, 39, 0)] pointer-events-none"></div>
          </div>
        ))}
      </SlickSlider>
      {isHovered && (
        <>
          <div className="absolute left-6 top-80 transform -translate-y-1/2">
            <button
              className="rounded-[10px] p-6 bg-black/25 hover:scale-105 transition duration-300 ease-in-out flex justify-center items-center text-white hover:text-primary text-[28px]"
              onClick={goToPrevSlide}
            >
              <IoIosArrowBack/>
            </button>
          </div>
          <div className="absolute right-6 top-80 transform -translate-y-1/2">
            <button
              className="rounded-[10px] p-6 bg-black/25 hover:scale-105 transition duration-300 ease-in-out flex justify-center items-center text-white hover:text-primary text-[28px] font-bold"
              onClick={goToNextSlide}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Slider;
