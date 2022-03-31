import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

import { makeStyles } from "@mui/styles";
// import SearchBar from "../../components/searchBar/SearchBar";
import Navbutton from "../../components/navButtons/Navbutton";

const useStyle = makeStyles({

  toolbaru: {
    backgroundColor: "#045700",
    height: 65,
  },
});

const NavbarContainer = () => {
  const classes = useStyle();

  return (
    <>
      <AppBar style={{ height: 65, }} >
        <Toolbar className={classes.toolbaru}>
          <Typography
            style={{
              color: "white",
              marginLeft: 90,
              cursor: "pointer",
              fontSize: 25,
              fontWeight: 700,
              letterSpacing: "2px",
            }}
          >
            {" "}
            Satyakart{" "}
          </Typography>

          {/* <SearchBar /> */}

          <Navbutton />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavbarContainer;
