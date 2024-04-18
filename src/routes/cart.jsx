import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../index.css'
export default function CartContext() {
    const [cartInfo, setCartInfo]  = useOutletContext()
    
    function removeItem(e) {
        const index = e.target.id;   
        
        let sumOfPrices = 0;
        for(let i = 0; i < cartInfo.length; i++) {
           sumOfPrices +=  cartInfo[i].price
           
        }
        cartInfo[cartInfo.length - 1].totalPrice = sumOfPrices
        const newTotal = cartInfo.map((c) => {
            if(index === c.id[0]) {
                let currentPrice = sumOfPrices - c.price;
                const rounded = currentPrice.toFixed(2);
                currentPrice = Number(rounded)
                cartInfo[cartInfo.length - 1].totalPrice = currentPrice
                return c
            } else {
                return c
            }
            
        })
        const filtered = cartInfo.filter(c=> c.id[0] !== index)
        newTotal
        filtered
        setCartInfo(filtered)
    }
    return(
    <>
    {cartInfo.length < 1 ? '' :  Object.keys(cartInfo).map((item, i) => (
        <div key={i}> 
            <img key={i} src={cartInfo[i].id[0]} alt="" />
            <div>
                <p>{cartInfo[i].val}</p>
                <button onClick={removeItem} id={cartInfo[i].id[0]}>Remove</button>
            </div>
        </div>     
    )) 
}  

        <div > 
            <p>Total: {cartInfo.length < 1 ? '' : cartInfo[cartInfo.length - 1].totalPrice}</p>
        </div>     
 

   
    </>
    )
}