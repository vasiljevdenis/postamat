import * as React from "react";
import Slider from "react-slick";

const Carousel = () => {

  const settings = {
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    cssEase: 'linear',
    variableWidth: true,
    variableHeight: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          centerMode: false,
          adaptiveHeight: true,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://cdn.stocksnap.io/img-thumbs/960w/palm-leaves_KMOJIUMD7C.jpg" alt="" />
      </div>
      <div>
        <img src="https://cdn.stocksnap.io/img-thumbs/960w/spring-flowers_TQCY3FH54E.jpg" alt="" />
      </div>
      <div>
        <img src="https://cdn.stocksnap.io/img-thumbs/960w/white-flowers_SKA4Y6LWCY.jpg" alt="" />
      </div>
      <div>
        <img src="https://cdn.stocksnap.io/img-thumbs/960w/yellow-flowers_EHHEBY5VZ3.jpg" alt="" />
      </div>
      <div>
        <img src="https://cdn.stocksnap.io/img-thumbs/960w/yellow-flower_KOXTBZIMXA.jpg" alt="" />
      </div>
    </Slider>
  )
};

export default Carousel;