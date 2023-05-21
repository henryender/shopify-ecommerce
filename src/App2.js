import React from 'react'
import smartWatch from './assets/smartWatch.webp';
import WhiteBoat from './assets/WhiteBoat.webp'
import yellowearpiece from './assets/yellowearpiece.webp'
import WiredEarphone from './assets/WiredEarphone.webp'
import WhiteSound from './assets/WhiteSound.webp'
import NeckPiece from './assets/NeckPiece.webp'
import { Box } from '@mui/material';
import './App.css';


const App2 = () => {
  const [index, setIndex] = React.useState(0)
  console.log(index)
  return (
    <>
      <Box display='flex'>
        {display?.map((item, id) =>
          <Box width='80%'>
            <img src={item.image} alt='imger' width='50%'
              onClick={() =>setIndex(item)}
              key={id} 
              
              // className={item===index? '':'imagecaro'}
              
              />
              
          </Box>)}
      </Box>

      <Box width='80%' >
        {index? <img src={index?.image} alt='ge' width='50%' />:<img src={WhiteSound} alt='ge' width='50%' />}
        
      </Box>


    </>
  )
}

export default App2

export const display = [

  { image: yellowearpiece, id: 1 },
  { image: WiredEarphone, id: 2 },
  { image: WhiteSound, id: 3 },
  { image: NeckPiece, id: 4 },

  { image: smartWatch, id: 5 },

  { image: WhiteBoat, id: 6 },


]