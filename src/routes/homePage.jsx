import { useState, useEffect } from "react"
import '../index.css'
import { Link } from 'react-router-dom'

export default function HomePage() {

    return (
        <>
        <div id="header">
        <div id="home">
            <div id="home-icon"></div>
        <h1>Home Page</h1>
             </div>
             <div id='links'>
                <a href={`/`}>Home-Page</a>
             </div>
             <div id='cart-box'>
                <div id='cart'></div> 
                <p></p>
             </div>
        </div>
        <div id="content">
            <Link to={`/shop-page-1`} id="hero-image-1">
              <h1>Jewelery</h1>
            </Link>
            <Link to={`/shop-page-2`} id="hero-image-2">
            <h1>Men&apos;s clothing</h1>
            </Link>
            <Link to={`/shop-page-3`} id="hero-image-3">
            <h1>Women&apos;s clothing</h1>
            </Link>
            <Link to={`/shop-page-4`} id="hero-image-4">
            <h1>Electronics</h1>
            </Link>
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