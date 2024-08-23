import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from "./Icons";
import Image from "./Image";

const NextArrow = ({ className, cn, style, onClick }) => {
  return (
    <div
      className={`${className} ${cn} right-0 z-10 size-10 lg:right-7 lg:size-16`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Icon
        className="transition-all group-[.slick-disabled]:stroke-gray-200"
        name="chevron-right"
        width={"100%"}
        fill={"#fff"}
      />
    </div>
  );
};

const PrevArrow = ({ className, cn, style, onClick }) => {
  return (
    <div
      className={`${className} ${cn} left-0 z-10 size-10 lg:left-7 lg:size-16`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Icon
        className="transition-all group-[.slick-disabled]:stroke-gray-200"
        name="chevron-left"
        width={"100%"}
        fill={"#fff"}
      />
    </div>
  );
};
const SlideShow = ({
  children,
  fade = true,
  infinite = true,
  speed = 500,
  slidesToShow = 1,
  slidesToScroll = 1,
  waitForAnimate = false,
  autoplay = false,
  autoplaySpeed = 2000,
  pauseOnHover = true,
  className = "slider",
  arrows = true,
  centerMode = false,
  dots = false,
  propsCustomPaging = [],
}) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    centerMode,
    dots,
    nextArrow: <NextArrow cn={"before:content-[''] group"} />,
    prevArrow: <PrevArrow cn={"before:content-[''] group"} />,
    centerPadding: centerMode ? "8px" : "",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow,
          slidesToScroll,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
        centerPadding: centerMode ? "60px" : "",
      },
    ],
  };

  if (propsCustomPaging.length > 0 && isLargeScreen) {
    (settings.dotsClass = "slick-dots slick-image"),
      (settings.customPaging = function (i) {
        return (
          <a className="">
            <Image
              imgSrc={propsCustomPaging[i]}
              ratio={"aspect-card"}
              className="h-full w-full"
            />
          </a>
        );
      });
  }
  return (
    <div
      className={`slider-container ${arrows ? "" : "overflow-hidden"} ${className} ${propsCustomPaging.length > 0 ? "slider-custom-paging" : "slider-default"}`}
    >
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SlideShow;
