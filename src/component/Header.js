import React from 'react';
import {useSelector} from 'react-redux'
import '../App.css'


export default function Header() {
    const state =useSelector((state)=>state.cartData);
    console.log('state',state.length)
  return (
    <div className='header'>
        <h4>Header</h4>        
        <h4>Items : {state.length}</h4>        

    </div>
  )
}


