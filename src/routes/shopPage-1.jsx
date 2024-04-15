import '../index.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";


export default function ShopPage() {
    const [image, setImage] = useState([])
    const [itemsInCart, setItemsInCart] = useState(0)
    const [cartInfo, setCartInfo] = useState([])
    const numOfItem = []
    const srcs = [];
    let prices = [];
          useEffect(() => {
                fetch('https://fakestoreapi.com/products')
              .then(function (response) {
                return response.json();
              }).then(function (response) {
              
                console.log(response)
                setImage(response)
               // console.log(response.results)
              })
              },[]);


              function addToCart(e) {
                let currentPrice = 0;
               let value = 1;
               e.target.parentElement.children[1].value = 1;

               prices.push(Number(e.target.value))
            
                srcs.push(e.target.id)
                if(numOfItem.length > 0) {
                  value = Number(numOfItem[numOfItem.length -1]);
                  for(let i = 1; i <  value; i++) {
                    prices[0] += Number(e.target.value)
                  }
                }
                if(cartInfo.length > 0) {
                  for(let i = 0; i < cartInfo.length; i++) {
                    if(!cartInfo[i].id.includes(srcs[0])) {
                      currentPrice = cartInfo[i].totalPrice + prices[0];
                      const rounded = currentPrice.toFixed(2);
                      currentPrice = Number(rounded);
                      setItemsInCart(itemsInCart + 1)
                      setCartInfo([...cartInfo, {id: srcs, val: value, totalPrice: currentPrice}])
                    } else  if(cartInfo[i].id.includes(srcs[0])) {
                      currentPrice = cartInfo[cartInfo.length -1].totalPrice + prices[0];
                      const rounded = currentPrice.toFixed(2);
                      currentPrice = Number(rounded);
                      const newItem = cartInfo.map((c, index) => {
                         if(index === i) {
                          c.val += value
                         Math.round(c.totalPrice = currentPrice)
                          return c
                         } else {
                          Math.round(c.totalPrice = currentPrice)
                          return c;
                         }
                         
                      })
                      setCartInfo(newItem)
                      setItemsInCart(itemsInCart)
                     
                      return false;
                    }
                  }
                
                } if(cartInfo.length === 0) {
                  currentPrice = prices[0];
                  setItemsInCart(itemsInCart+ 1)
                  setCartInfo([...cartInfo, {id: srcs, val: value, totalPrice: currentPrice}])
                }
                
              }
            
    return (
        <>
       
        <div id="shop-content">
            {image.map(img =>
                <div key={img.id} >
                    <p>Price: ${img.price}</p>
                    <img key={img.id} src={img.image}/>
                    <div >
                        <label htmlFor="items">Items:</label>
                        <input type="number" id="points" name="items" onChange={(e) => numOfItem.push(e.target.value)} placeholder='1' max={10}></input>
                        <button key={img.id} id={img.image} value={img.price} onClick={addToCart}>Add</button>
                    </div>
                </div>
                )}
        </div>
        <div id="sidebar">
             <div id='links'>
                <Link to={`/`}  state={itemsInCart}><h1>Home-Page</h1></Link >
             </div>
             <div id='cart-box'>
                <div id='cart'></div> 
                
                
                <Link to={`/shop-page-1/cart`}><p>{itemsInCart}</p></Link>
             </div>
             
                 <div id='cart-items'>
                   
                   <Outlet context={[cartInfo, setCartInfo]}/>
                 </div>
                
        </div>
        </>
    )
}

