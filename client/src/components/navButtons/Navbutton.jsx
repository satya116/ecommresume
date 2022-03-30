import React, {useContext, useState} from 'react';

import { Box,Button, Typography  } from '@mui/material';

import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {loginContext} from '../../context/ContextProvider'

// compo nent

import LoginDialog from '../login/Login';
import Profile from '../profile/Profile';

const Navbutton = () => {

  const [open, setOpen] = useState(false)
  const {accountu, setAccountu } = useContext(loginContext)

  return (
    <>

    <Box style={{ display: "flex", margin: "0 5% 0 auto" }}>
       {
         accountu ? <Profile accountu={accountu} setAccountu={setAccountu} />  : <Link onClick={(e)=>setOpen(true)} to={'/'} style={{ color: "white", textDecoration: "none" }} >
         <Button style={{ backgroundColor: "white", color: "red", height: "inherit" }} variant='contained'>
              
              Login
  
          </Button></Link>
       }

        <Link style={{ color: "white", textDecoration: "none" }} to={'/'}> <Typography> More</Typography> </Link>

        <Link to={'/cart'} style={{ color: "white", textDecoration: "none" }}>
           
            <Typography>   <ShoppingCartIcon  /> Cart </Typography>
        </Link>

        <LoginDialog open={open} setOpen={setOpen} setAccountu={setAccountu} />
        

        
    </Box>



    </>
  )
}

export default Navbutton