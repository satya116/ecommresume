import React, { useEffect } from 'react'
import Banner from '../../components/banner/Banner'
import Slide from '../../components/slide/Slide'
import NavbarContainer from '../../containers/navbarContainer/NavbarContainer'


import { useDispatch, useSelector } from 'react-redux'

import {getProducts as listProducts} from '../../redux/actions/productAction'



const HomePage = () => {

  const getProducts = useSelector(state => state.getProducts);
  const { products } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(listProducts())
  }, [dispatch])

  return (
    <>
    
    <NavbarContainer />

    <Banner />

    <Slide data={products} />
    
    </>
  )
}

export default HomePage