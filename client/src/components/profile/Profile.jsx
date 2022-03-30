import { Menu, MenuItem, Typography } from '@mui/material'
import React, {useState} from 'react'

const Profile = ({ accountu, setAccountu }) => {

    const [open, setOpen] = useState(false)

    const handleClose=()=>{
        setOpen(false)

    }
    const handleClick=(e)=>{
        setOpen(e.currentTarget)

    }
    const logout=(e)=>{
        setAccountu('')
        

    }

  return (
    <>

    <Typography onClick={handleClick}>
        {accountu}
    </Typography>

    <Menu
        id="basic-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      
      >
        <MenuItem onClick={()=>{ handleClose(); logout()} } >Log out</MenuItem>
      
      </Menu>




    </>
  )
}

export default Profile