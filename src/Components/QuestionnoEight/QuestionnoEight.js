import React, {useEffect, useState } from 'react'
import Nabar from './Components/Nabar';
import Product from './Components/product';
import axios from 'axios';

export default function QuestionnoEight() {
  const [state,setState]= useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>setState(res.data))
  },[])
    return (
      <div>
        <Nabar/>
        <Product state={state}/>
      </div>
    )
}
