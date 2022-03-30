import * as actionType from "../constants/productConstant";

export const getProductsReducer = (state = { products: [] }, actionU) => {
  switch (actionU.type) {
    case actionType.GET_PROUCT_SUCCESS:
      return { products: actionU.payload };

    case actionType.GET_PROUCT_FAIL:
      return { error: actionU.payload };

    default:
      return state;
  }
};

export const getProductDetailsReducer = (state={product: {}}, actionU) => {

  switch(actionU.type){

    case  actionType.GET_PROUCT_DETAIL_SUCCESS: 
          return { product: actionU.payload  }

    case actionType.GET_PROUCT_DETAIL_FAIL:    
      return {error: actionU.payload}

    default:
       return state
  }

};


