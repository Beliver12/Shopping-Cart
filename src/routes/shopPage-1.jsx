import '../index.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

function Cart({value}) {

  return <p value={value}>{value}</p>
}

function AddButton({handleClick}) {
  return <button onClick={handleClick}>Add</button>
}

export default function ShopPage() {
    const [image, setImage] = useState([])
    const [itemsInCart, setItemsInCart] = useState(0)
    const [item, setItem] = useState([])

          useEffect(() => {
                fetch('https://fakestoreapi.com/products/category/jewelery')
              .then(function (response) {
                return response.json();
              }).then(function (response) {
              
                console.log(response)
                setImage(response)
               // console.log(response.results)
              })
              },[]);

            
    return (
        <>
        <div id="header">
           
            <h1>Jewelery</h1>
             <div id='links'>
                <Link to={`/`}>Home-Page</Link >
             </div>
             <div id='cart-box'>
                <div id='cart'></div> 
                <Cart value={itemsInCart} >{itemsInCart}</Cart>
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
                        <AddButton key={img.id} id={img.id} handleClick={() => setItemsInCart(itemsInCart + 1)}>Add</AddButton>
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

export {Cart, AddButton}