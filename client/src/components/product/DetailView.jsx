import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import NavbarContainer from "../../containers/navbarContainer/NavbarContainer";

import { getProductDetails } from "../../redux/actions/productAction";
import { Box, Grid, Typography } from "@mui/material";

import clsx from "clsx";

import { makeStyles } from "@mui/styles";
import ProductDetail from "./ProductDetail";

import ActionItem from './ActionItem'

const useStyles = makeStyles({
  component: {
    marginTop: 65,
    background: "#F2F2F2",
  },
  container: {
    background: "#FFFFFF",

    display: "flex",
  },
  rightContainer: {
    marginTop: 50,
    "& > *": {
      marginTop: 10,
    },
  },
  price: {
    fontSize: 28,
  },
  smallText: {
    fontSize: 14,
  },
  greyTextColor: {
    color: "#878787",
  },
});

const DetailView = () => {
  const { id } = useParams();

  const { product } = useSelector((state) => state.getProductDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch]);

  const classes = useStyles();

  return (
    <>
      <NavbarContainer />

      <Box className={classes.component}>
        <Box></Box>
        {product && Object.keys(product).length && (
          <Grid container className={classes.container}>
            <Grid item lg={4} md={4} sm={8} xs={12}>
              <ActionItem product={product} />
            </Grid>
            <Grid
              item
              lg={8}
              md={8}
              sm={8}
              xs={12}
              className={classes.rightContainer}
            >
              <Typography>{product.product.title.longTitle}</Typography>
              <Typography
                className={clsx(classes.greyTextColor, classes.smallText)}
                style={{ marginTop: 5 }}
              >
                8 Ratings & 1 Reviews
              </Typography>
              <Typography>
                <span className={classes.price}>
                  ₹ {product.product.price.cost}{" "}
                </span>
                <span className={classes.greyTextColor}>
                  <strike>₹ {product.product.price.mrp} </strike>
                </span>
                <span style={{ color: "#388E3C" }}>
                  {" "}
                  {product.product.price.discount} off
                </span>
              </Typography>

              <ProductDetail product={product} />
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  );
};

export default DetailView;
