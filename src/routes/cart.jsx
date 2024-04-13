import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../index.css'
export default function CartContext() {
    const [cartInfo, setCartInfo]  = useOutletContext()
    return(
    <>
    { 
    Object.keys(cartInfo).map((item, i) => (
        <div key={i}> 
            <img key={i} src={cartInfo[i].id[0]} alt="" />
            <div>
                <p>{cartInfo[i].val}</p>
                <button>Remove</button>
            </div>
        </div>     
    )) 
}  

        <div > 
            <p>Total: {cartInfo[cartInfo.length - 1].totalPrice}</p>
        </div>     
 

   
    </>
    )
}