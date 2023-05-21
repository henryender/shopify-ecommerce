import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Checkout() {
  return (
    <div style={{ marginTop: '200px' }} >
      <div style={{ textAlign: 'center' }}>
        <h2>Thank you for your purchase!</h2>
        <Link to='/'>
          <Button size='medium'>continue shopping</Button>
        </Link>

      </div>



    </div>
  )
}

export default Checkout