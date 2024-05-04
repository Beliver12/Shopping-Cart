
import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../index.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'

export default function HomePage() {
    const [cartInfo, setCartInfo] = useState([])
    const [items, setItems] = useState([])
    return (
        <>
       
        <div id="header">
        <div id="home">
          
            <div>
        <a  target="_blank" className="logo"  >
          
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
        <h1>Shopping Cart Project</h1>
             </div>
             <Link to={`/shop-page-1`} >
              <h1>Open Shop</h1>
              
            </Link>
            <Link to={`/`} ><h1>Home-Page</h1></Link >   
            <Link to={`/about`} ><h1>About-Us</h1></Link >  
            <Link to={`/cart`}>
            <div id='cart-box'>
                <div id='cart'></div>
                <p>{cartInfo.length }</p>
                 </div>
                 </Link>
        </div>
        <div id="content"><Link to={`/shop-page-1`}><button><span>Shop-Now</span></button></Link></div>
    
        
        <Outlet context={{cartInfo, setCartInfo, items, setItems}}/>
        
       
       
        </>
    )
}

