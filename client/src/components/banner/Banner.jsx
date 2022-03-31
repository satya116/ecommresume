import React from "react";

import { Box } from "@mui/material";

import Carousel from "react-material-ui-carousel";

import { bannerData } from "../../data";

const Banner = () => {
  return (
    <>
      <Carousel>
        {bannerData.map((data) => {
          return (
            <Box
              style={{
                width: "98%",
                height: "350px",
                margin: "75px auto 0px auto",
                overflow: "hidden",
                borderRadius: "9px",
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src={data}
                alt=""
              />
            </Box>
          );
        })}
      </Carousel>
    </>
  );
};

export default Banner;
