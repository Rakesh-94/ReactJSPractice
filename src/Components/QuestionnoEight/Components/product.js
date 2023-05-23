import React, { useEffect, useState } from 'react'
import Cart from './cart'

export default function Product (props) {
  const [state,setState] = useState([])
  useEffect(()=>{
    setState(props.state)
  },[props])
    return (
      <div className='container my-10'>
        <h1>Product</h1>
        <div className='row'>
        <div className='col-md-4'>
          {state.map((item)=>{
      return(  <Cart title={item.title} description={`${item.price} $`} image={item?.image}/>)

          })}
        </div>
        </div>
      </div>
    )
  
}
