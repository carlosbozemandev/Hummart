import React from "react";
import carouselImg from "../../assets/images/offer.jpg";

import { Carousel } from "react-bootstrap";
import { carouselData } from "../../Helper/dummyData";
import style from "./Carousel.module.scss";

const MainCarousel = () => {
  return (
    <>
      <Carousel
        variant="dark"
        controls={false}
        indicators={false}
        className={`${style.carousel}`}
        interval={3000}
      >
        {carouselData?.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className={`d-block w-100 ${style.image}`}
                src={item?.image}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default MainCarousel;
