import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrderSummary from '../OrderSummary';

function Home() {
   const navigate=useNavigate()
  return (
    <div>
        <h1>Home Pages</h1>
        <button onClick={()=>{navigate('Ordersummary',)}}>Place Order</button>
    </div>
  )
}

export default Home