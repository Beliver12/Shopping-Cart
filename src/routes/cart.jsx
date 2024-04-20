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

     function increment(e) {
        const index = e.target.id; 

        const newIncrement = cartInfo.map((c) => {
            if(index === c.id[0]) {
                c.val += 1;
                if(c.val > 2) {
                let sum = c.price / (c.val -1);
                let rounded = sum.toFixed(2)
                c.price += Number(rounded);
                } else{
                    c.price += c.price;
                }
                return c;
            } else {
                return c
            }
        })
        setCartInfo(newIncrement)
        let sumOfPrices = 0;
        for(let i = 0; i < newIncrement.length; i++) {
           sumOfPrices +=  cartInfo[i].price
           
        }
        let rounded = sumOfPrices.toFixed(2);
           sumOfPrices = Number(rounded);
        cartInfo[cartInfo.length - 1].totalPrice = sumOfPrices
     }

     function decrement(e) {
        const index = e.target.id;

        const newDecrement = cartInfo.map((c) => {
            if(index === c.id[0]){
               
               if(c.val > 1) {
                let sum = c.price / c.val;
                let rounded = sum.toFixed(2);
                c.price -= Number(rounded);
                rounded = c.price.toFixed(2);
                c.price = Number(rounded);
               } 
               if(c.val > 1) {
               c.val -= 1;
               }
               return c;
            } else {
                return c;
            }
        })
        setCartInfo(newDecrement)
        let sumOfPrices = 0;
        for(let i = 0; i < newDecrement.length; i++) {
           sumOfPrices +=  cartInfo[i].price
           
        }
        let rounded = sumOfPrices.toFixed(2);
           sumOfPrices = Number(rounded);
        cartInfo[cartInfo.length - 1].totalPrice = sumOfPrices
     }

    return(
    <>
      <div id='shop-content'>
    {cartInfo.length < 1 ? '' :  Object.keys(cartInfo).map((item, i) => (
        <div key={i}> 
            <img key={i} src={cartInfo[i].id[0]} alt="" />
            <div>
                
                <button onClick={removeItem} id={cartInfo[i].id[0]}>Remove</button>
                <div>
                    <p>{cartInfo[i].val}X</p>
                    <button id={cartInfo[i].id[0]} onClick={increment}>+</button>
                    <button id={cartInfo[i].id[0]} onClick={decrement}>-</button>
                </div>
            </div>
        </div>     
    )) 
}  

        <div > 
            <p>Total: {cartInfo.length < 1 ? '' : cartInfo[cartInfo.length - 1].totalPrice}</p>
        </div>     
 
        </div>
   
    </>
    )
}