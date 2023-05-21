import React from 'react'
import { Box } from '@mui/material'
import { display } from '../data'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


 export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Banner = () => {
  
  return (
    <div style={{ marginTop: '80px', }}>
   <h2 style={{textAlign:'center', border:'4px solid lightgray', padding:'10px'}}>NEW ARRIVALS</h2>
      <Carousel responsive={responsive}
       infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {display.map((item) =>
          <>
          <Box sx={{ backgroundColor: 'lightgray',padding:'10px' ,margin:'5px'}} >
          <h3 style={{textAlign:'center'}}>{item.name}</h3>
            <Box display='flex'justifyContent='center'>
              <img src={item.image} alt='' width='300px' height='200px' className='image'  />     
            </Box>
            <h4 style={{textAlign:'center'}}>${item.price}</h4>
          </Box>
         
            
          </>

        )}
      </Carousel>



    </div>
  )
}

export default Banner
