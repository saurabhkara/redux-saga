import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeItem } from '../redux/action';
import { getProduct } from '../redux/productAction';





const data={
    name:'Saurabh',
    address:'Ara'
  }

  // const data2= [
  //   {
  //     color: "red",
  //     value: "#f00"
  //   },
  //   {
  //     color: "green",
  //     value: "#0f0"
  //   },
  //   {
  //     color: "blue",
  //     value: "#00f"
  //   },
  //   {
  //     color: "cyan",
  //     value: "#0ff"
  //   },
  //   {
  //     color: "magenta",
  //     value: "#f0f"
  //   },
  //   {
  //     color: "yellow",
  //     value: "#ff0"
  //   },
  //   {
  //     color: "black",
  //     value: "#000"
  //   }
  // ]

export default function Main() {

  const dispatch = useDispatch();
  const state =useSelector((state)=>state.productReducer)

  useEffect(()=>{
    console.log('item in UI',state)
  })

    
   
  return (
    <div>
        <button onClick={()=>dispatch(addToCart(data))}>Add Item</button>
        <button onClick={()=>dispatch(removeItem(data))}>Remove Item</button>
        <button onClick={()=>dispatch(getProduct())}>Get Product</button>
        {/* <button onClick={}>Get Branded products</button> */}
    </div>
  )
}
