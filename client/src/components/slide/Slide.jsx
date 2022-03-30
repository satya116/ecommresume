import { Box, Typography } from "@mui/material";
import React from "react";
import Countdown from "react-countdown";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";




const responsive = {
  superLargeDesktop: {
   
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const timerURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

const Slide = ({data}) => {
 


  return (
    <>
      <Box style={{ marginTop: 12, backgroundColor: "white" }}>
        <Box style={{ padding: "15px 25px", display: "flex" }}>
          <Typography> Deal of the day</Typography>
          <img src={timerURL} alt="" style={{ width: 24 }} />

          <Countdown date={Date.now() + 1000 * 60 * 60 * 24} />
        </Box>

        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {data.map((product) => {
            return (
              <>
                <Link to={`/product/${product.id}`} >
               
                <img style={{ height: "105px" }} src={product.url} alt="" />

                <Typography> {product.title.shortTitle} </Typography>
                <p> {product.discount} </p>
                <Typography> {product.tagline} </Typography>

                </Link>
              </>
            );
          })}
        </Carousel>
      </Box>
    </>
  );
};

export default Slide;
