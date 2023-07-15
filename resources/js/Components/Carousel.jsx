import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
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

  const [slider, setSlider] = useState([]);


  useEffect(() => {
    axios.get(import.meta.env.VITE_APP_BASE_URL + `/api/slider`)
      .then(res => {
        let json = res.data;
        json.sort((a, b) => a.priority - b.priority);
        setSlider(json);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
      });
  }, []);

  return (
    <Slider {...settings}>
      {slider.map((item) => (
        <div key={'slider-item' + item.id}>
          <a href={item.link} target={item.target}>
            <img
              src={`${item.image}`}
              alt={'Slider item ' + item.id}
            />
          </a>
        </div>
      ))}
    </Slider>
  )
};

export default Carousel;