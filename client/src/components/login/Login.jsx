import React, {  useState } from "react";
import Dialog from "@mui/material/Dialog";
import {
  Box,
  Button,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";



import { AuthenticationSignUp, AuthenticationLogin } from "../../service/api";



const initialValues = {
  login: {
    view: 'login',

  }, 
  signup:{
    view: 'signup'

  }
}

const initialValueSignupValues ={
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: ""
}

const initialValueLogin ={
  firstname: "",
  password: "",
 
}



const Login = ({ open, setOpen, setAccountu }) => {
  const handleclose = () => {
    setOpen(false)
    setAccount(initialValues.login);

  };

  const [account, setAccount] = useState(initialValues.login);
  const [signup, setSignup] =useState(initialValueSignupValues)
  const [login, setLogin] = useState(initialValueLogin)
  const [error, setError] =useState(false)
 

  const toggglubaba = () => {
    setAccount(initialValues.signup);
  };


  
const signupuser= async ()=>{

  const respo = await AuthenticationSignUp(signup)
  if(!respo) return
  handleclose()

  setAccountu(signup.username)
 
 }

 const onInputChange=(e)=>{

  setSignup({...signup, [e.target.name]:e.target.value})

 }
 const onValueChange=(e)=>{

  setLogin({...login, [e.target.name]:e.target.value})

 }

 const loginUser = async ()=>{
  let respo = await AuthenticationLogin(login)
  if(!respo){
    setError(true)
  }else{
  handleclose()
  setAccountu(login.username)
 }
}

  return (
    <>
      <Dialog open={open} onClose={handleclose}>
        <DialogContent style={{ height: "653px", width: "533px" }}>
          {account.view === "login" ? (

            <Box style={{ padding: "33px" }}>
              {
                error && <Typography> invalid input </Typography>

              }
              
              <TextField onChange={(e)=>onValueChange(e)} name="username" label="username" />

              <TextField onChange={(e)=>onValueChange(e)} name="password" label="enter password" />
              <Button variant="contained" onClick={()=>loginUser()} >Login</Button>
              <Typography
                onClick={() => {
                  toggglubaba();
                }}
              >  
                New to ekart?
              </Typography>

            </Box>
          ) : (
            <Box style={{ padding: "33px" }}>

              <TextField onChange={(e)=>onInputChange(e)} name="firstname" label="username" />
              <TextField onChange={(e)=>onInputChange(e)} name="lastname" label="enter password" />
              <TextField onChange={(e)=>onInputChange(e)} name="username" label="username" />
              <TextField onChange={(e)=>onInputChange(e)} name="email" label="enter password" />
              <TextField onChange={(e)=>onInputChange(e)} name="password" label="username" />
              <TextField onChange={(e)=>onInputChange(e)} name="phone" label="enter password" />

              <Button variant="contained" onClick={()=>signupuser()} >Signup</Button>
              <Typography> login here </Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Login;
