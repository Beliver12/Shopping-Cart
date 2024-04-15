
import { Outlet } from "react-router-dom";

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
          
             
        </div>
        <Link to={`/shop-page-1`} id="hero-image-1">
              <h1>Open Shop</h1>
            </Link>
        <div id="content">
            
        <Outlet />
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