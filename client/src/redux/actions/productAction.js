import axios from "axios";

import * as actionU from "../constants/productConstant";

const url = "";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/getproducts`);

    dispatch({
      type: actionU.GET_PROUCT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionU.GET_PROUCT_FAIL,
      payload: err.response,
    });
  }
};

export  const getProductDetails =(id)=> async (dispatch)=>{

  try{

    const {data} = await axios.get(`${url}/getproduct/${id}`)

    dispatch({
      type: actionU.GET_PROUCT_DETAIL_SUCCESS,
      payload: data,
    });


  }catch(err){
    dispatch({
      type: actionU.GET_PROUCT_DETAIL_FAIL,
      payload: err.response,
    });
  }



}
