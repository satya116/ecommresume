import axios from 'axios';

const url= '';


 export const AuthenticationSignUp = async (user)=>{

    return await axios.post(`${url}/signup`, user )

}

export const AuthenticationLogin = async (user)=>{

    return await axios.post(`${url}/login`, user )

}