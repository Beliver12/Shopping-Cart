import '../index.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function ShopPage4() {
    const [image, setImage] = useState([])
    const [itemsInCart, setItemsInCart] = useState(0)
    const [item, setItem] = useState([])
   // ['electronics', 'jewelery', "men's clothing", "women's clothing"]
          useEffect(() => {
                fetch(`https://fakestoreapi.com/products/category/electronics`)
              .then(function (response) {
                return response.json();
              }).then(function (response) {
              
                console.log(response)
                setImage(response)
               // console.log(response.results)
              })
              },[]);

              function addToCart(e) {
                setItemsInCart(itemsInCart+ 1)
                setItem(e.target.id)
              }
    return (
        <>
        <div id="header">
           
            <h1>Electronics</h1>
             <div id='links'>
                <Link to={`/`}>Home-Page</Link >
             </div>
             <div id='cart-box'>
                <div id='cart'></div> 
                <p>&nbsp; :{itemsInCart}</p>
             </div>
        </div>
        <div id="shop-content">
            {image.map(img =>
                <div key={img.id}>
                    <p>Price: ${img.price}</p>
                    <img key={img.id} src={img.image}/>
                    <div>
                        <label htmlFor="items">Items:</label>
                        <input type="number" id="points" name="items" placeholder='1' max={10}></input>
                        <button key={img.id} id={img.id} onClick={addToCart}>Add</button>
                    </div>
                </div>
                )}
        </div>
        <div id="footer">
        <h1>Contact-Us:</h1>
        <div id="email">E-mail: &nbsp; Something@gmail.com<p></p></div>
        <div id="mobile">Mobile: &nbsp; 999-333-666<p></p></div>
        <div id="icons">
          <div id="instagram"></div>
          <div id="facebook"></div>
          <div id="youtube"></div>
          <div id="twitter"></div>
        </div>
        <h1>About-Us:</h1>
        <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, eligendi nulla. Molestias repellendus iusto possimus ipsa nobis, rem maxime similique consequatur eius at numquam fugiat vitae blanditiis. Beatae, expedita? Ab.</h4>
        </div>
        </>
    )
}