
import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../index.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react';



export default function HomePage() {
    const [cartInfo, setCartInfo] = useState([])

    return (
        <>
        
        <div id="header">
        <div id="home">
            <div id="home-icon"></div>
        <h1>Shopping Cart Project</h1>
             </div>
             <Link to={`/shop-page-1`} >
              <h1>Open Shop</h1>
              
            </Link>
            <Link to={`/`} ><h1>Home-Page</h1></Link >   
            <Link to={`/about`} ><h1>About-Us</h1></Link >  
               
            <div id='cart-box'>
                <div id='cart'></div>
                <Link to={`/cart`}><p>{cartInfo.length }</p></Link>
                 </div>
             
        </div>
        <div id="content"></div>
    
        
            <Outlet context={[cartInfo, setCartInfo]}/>
        
      
       
        </>
    )
}

