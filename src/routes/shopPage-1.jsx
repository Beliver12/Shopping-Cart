import '../index.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";


export default function ShopPage() {
    const [image, setImage] = useState([])
    const [itemsInCart, setItemsInCart] = useState(0)
    const [itemId, setItemId] = useState([])
    const [itemPrice, setItemPrice] = useState([])
    const numOfItem = []
    const ids = [];
    const prices = [];
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

               let value = Number(numOfItem[numOfItem.length -1])
                if(numOfItem.length > 0) {
                  for(let i = 0; i <  value; i++) {
                    prices.push(e.target.value)
                    ids.push(e.target.id)
                  }
                }
                prices.push(e.target.value)
                ids.push(e.target.id)
                if(itemId.length > 0) {
                  for(let i = 0; i < itemId.length; i++) {
                    if(itemId[i].id.includes(ids[0])) {
                      setItemsInCart(itemsInCart)

                      setItemId([...itemId, {id: ids[0]}])
                      
                    } else if(!itemId[i].id.includes(ids[0])) {
                      
                      setItemsInCart(itemsInCart + 1)
                    }
                  }
                
                } if(itemId.length === 0) {
                 prices.map(price =>
                  setItemPrice([...itemPrice, {price: price}])
                  )
                  
                  
                  setItemsInCart(itemsInCart+ 1)
                }
       
               // setItemPrice([...itemPrice, {price: prices[0]}])
                setItemId([...itemId, {id: ids[0]}])
                
              }
            
    return (
        <>
       
        <div id="shop-content">
            {image.map(img =>
                <div key={img.id}>
                    <p>Price: ${img.price}</p>
                    <img key={img.id} src={img.image}/>
                    <div >
                        <label htmlFor="items">Items:</label>
                        <input type="number" id="points" name="items" onChange={(e) => numOfItem.push(e.target.value)} placeholder='1' max={10}></input>
                        <button key={img.id} id={img.id} value={img.price} onClick={addToCart}>Add</button>
                    </div>
                </div>
                )}
        </div>
        <div id="sidebar">
             <div id='links'>
                <Link to={`/`} state={itemsInCart}><h1>Home-Page</h1></Link >
             </div>
             <div id='cart-box'>
                <div id='cart'></div> 
                <Link to={`/shop-page-1/cart`}>
                  <p >{itemsInCart}</p>
                  <Outlet context={[itemId, setItemId]}/>
                </Link>
             </div>
        </div>
        </>
    )
}

