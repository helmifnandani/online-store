import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from './Icons';

const NextArrow = ({ className, cn, style, onClick }) => {
  return (
    <div
      className={`${className} ${cn}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}>
        <Icon className="group-[.slick-disabled]:stroke-gray-200 transition-all" name="chevron-right" width={32} />
    </div>
  );
}

const PrevArrow = ({ className, cn, style, onClick }) => {
  return (
    <div
      className={`${className} ${cn}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}>
        <Icon className="group-[.slick-disabled]:stroke-gray-200 transition-all" name="chevron-left" width={32} />
    </div>
  );
}
const SlideShow = ({children,
        fade = true,
        infinite = true,
        speed = 500,
        slidesToShow = 1,
        slidesToScroll = 1,
        waitForAnimate = false,
        autoplay = true,
        autoplaySpeed = 2000,
        pauseOnHover = true,
        className = "slider",
        arrows = true
    }) => {
    const settings = {
        fade,
        infinite,
        speed,
        slidesToShow,
        slidesToScroll,
        waitForAnimate,
        autoplay,
        autoplaySpeed,
        pauseOnHover,
        arrows,
        lazyLoad: true,
        nextArrow: <NextArrow cn={"before:content-[''] group"} />,
        prevArrow: <PrevArrow cn={"before:content-[''] group"} />,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow,
            slidesToScroll,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className={`slider-container ${arrows ? '' : 'overflow-hidden'} ${className}`}>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}

export default SlideShow