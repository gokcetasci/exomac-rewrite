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
        <div>
            <h2>Single Item</h2>
            <SlickSlider {...settings}>
                {sliders.map((slider, index) => (
                    <div key={index}>
                        <img src={slider.img} alt={`slide ${index + 1}`} />
                    </div>
                ))}
            </SlickSlider>
        </div>
    );
}

export default Slider;
