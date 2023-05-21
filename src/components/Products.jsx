
import React from 'react'
import MediaCard from './productCard'
import Banner from './Banner'

function Products({input,setInput}) {
   
    
    return (
        <>
        <Banner />
        <h2 id='card' style={{textAlign:'center', border:"4px solid lightgray", padding:'10px'}}>Great Deals</h2>
        <MediaCard input={input} />
        </>
    )
}

export default Products