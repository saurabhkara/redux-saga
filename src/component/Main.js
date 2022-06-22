import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeItem } from '../redux/action';


const data={
    name:'Saurabh',
    address:'Ara'
  }

export default function Main() {

    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=>dispatch(addToCart(data))}>Add Item</button>
        <button onClick={()=>dispatch(removeItem(data))}>Remove Item</button>
        <button onClick={()=>dispatch(addToCart(data))}>Add Item</button>
    </div>
  )
}
