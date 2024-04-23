import '../index.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function ShopPage() {
    const [image, setImage] = useState([])
    const [image2, setImage2] = useState([])
    const {items, setItems}  = useOutletContext()
    const {cartInfo, setCartInfo} = useOutletContext()
    const categories = ['all-items',"men's clothing", 'jewelery', 'electronics', "women's clothing"]
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
                setImage2(response)
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
                      
                      setCartInfo([...cartInfo, {id: srcs, val: value, totalPrice: currentPrice, price: prices[0]}])
                    } else  if(cartInfo[i].id.includes(srcs[0])) {
                      currentPrice = cartInfo[cartInfo.length -1].totalPrice + prices[0];
                      const rounded = currentPrice.toFixed(2);
                      currentPrice = Number(rounded);
                      const newItem = cartInfo.map((c, index) => {
                         if(index === i) {
                          c.val += value
                         Math.round(c.totalPrice = currentPrice)
                         Math.round(c.price += prices[0])
                          return c
                         } else {
                          Math.round(c.totalPrice = currentPrice)
                          return c;
                         }
                         
                      })
                      setCartInfo(newItem)
                     
                      return false;
                    }
                  }
                
                } if(cartInfo.length === 0) {
                  currentPrice = prices[0];
                  setCartInfo([...cartInfo, {id: srcs, val: value, totalPrice: currentPrice, price: prices[0]}])
                }
               
              }

              function changeCategorie(e) {
                setImage(image2)
                      const newCategorie = e.target.parentElement.children[0].value
                      if(newCategorie === 'all-items') {
                        setImage(image2)
                        return false
                      }
                      if(image.length === 20){
                      const filtered = image.filter(c => c.category === newCategorie)
                      filtered
                      setImage(filtered)
                      } else if(image.length < 20){
                        const filtered = image2.filter(c => c.category === newCategorie)
                        filtered
                        setImage(filtered)
                      }
              }

              function getImageClicked(e) {
                if(items.length > 0) {
                  items.length = 0;
                }
                const clicked = e.target.id;
                const image = e.target.src;
                setItems([...items, {description: clicked, src: image}])
              }
            
    return (
        <>
        <div id='filter-option'>
          <select defaultValue='' name="" id="">
          {categories.map(c =>
           <option defaultValue='' key={c} value={c}>{c}</option>
            )}
                </select>
                <button onClick={changeCategorie}>filter</button>
        </div>
        <Outlet context={{cartInfo, setCartInfo, items, setItems}}/>
        <div id='shop-content'>
          
            {image.map(img =>
                <div key={img.id} >
                    <p>Price: ${img.price}</p>
                    <Link to={`/description`}><img onClick={getImageClicked} key={img.id} id={img.description} src={img.image}/></Link>
                    <div >
                        <label htmlFor="items">Items:</label>
                        <input type="number" id="points" name="items" onChange={(e) => numOfItem.push(e.target.value)} placeholder='1' max={10} min={1}></input>
                        <button key={img.id} id={img.image} value={img.price} onClick={addToCart}>Add</button>
                        
                    </div>
                    <p>{img.title}</p>
                   
                </div>
                
                )}
      
       
          
             
           
                
        </div>
        </>
    )
}

