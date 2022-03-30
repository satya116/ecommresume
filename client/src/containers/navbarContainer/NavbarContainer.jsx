import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

import { makeStyles } from '@mui/styles'
import SearchBar from '../../components/searchBar/SearchBar'
import Navbutton from '../../components/navButtons/Navbutton'

const useStyle = makeStyles({

  navbar:{
    backgroundColor: "green",
  },
  toolbaru:{
    backgroundColor: "blue"

  },
  brandName:{
    
    color: "white",
    letterSpacing: "1px",
    marginLeft: 33,

  }
   

})

const NavbarContainer = () => {

  const classes = useStyle()

  return (
    <>

    <AppBar className={classes.navbar}>
      <Toolbar className={classes.toolbaru}>
        <Typography className={classes.brandName}> MyCart.com </Typography>

        <SearchBar />

        <Navbutton />

      </Toolbar>
    </AppBar>










    </>
  )
}

export default NavbarContainer