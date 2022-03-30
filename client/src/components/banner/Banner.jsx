import React from 'react';

import Carousel from 'react-material-ui-carousel';

import { bannerData } from '../../data';

const Banner = () => {
  return (
    <>

    <Carousel>

        {
            bannerData.map((data)=>{
               return(
                   <img  style={{ width: "100%", height: "50vh", marginTop: "64px" }} src={data} alt=""  />
               )
            })
        }





    </Carousel>
    
    
    </>



  )
}

export default Banner