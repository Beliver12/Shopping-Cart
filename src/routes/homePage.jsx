import { useState, useEffect } from "react"
import '../index.css'

export default function HomePage() {
 /* const [image, setImage] = useState()

          useEffect(() => {
                fetch('https://fakestoreapi.com/products/1')
              .then(function (response) {
                return response.json();
              }).then(function (response) {
              
                setImage(response.image)
               // console.log(response.results)
              })
              },[]);*/
    return (
        <>
        <div id="header">
        <div id="home">
            <div id="home-icon"></div>
        <h1>Home Page</h1>
             </div>
             <div id='links'>
                <a href={`/shop-page`}>Shop-Page</a>
                <a href={`/`}>Home-Page</a>
             </div>
        </div>
        <div id="content">
            <div id="hero-image-1">
              <span><a href="https://www.pexels.com/photo/pair-of-brown-leather-wingtip-shoes-beside-gray-apparel-on-wooden-surface-298864/">Photo by Terje Sollie</a></span>
            </div>
            <div id="hero-image-2">
              <span><a href="https://www.freepik.com/free-photo/woman-holds-fashion-shopping-bag-beauty_5073217.htm#fromView=search&page=1&position=2&uuid=9dd459b0-299b-428d-949d-4b742f7fc715">Image by jcomp on Freepik</a></span>
            </div>
            <div id="hero-image-3">
              <span><a href='https://www.pexels.com/photo/close-up-of-row-325876/'>Photo by Pixabay</a></span>
            </div>
            <div id="hero-image-4">
              <span><a href='https://www.pexels.com/photo/close-up-of-row-325876/'>Photo by Pixabay</a></span>
            </div>
            <div id="hero-image-5">
              <span><a href='https://www.pexels.com/photo/group-of-people-walking-inside-building-2375131/'>Photo by Laurentiu Robu</a></span>
            </div>
            <div id="hero-image-6">
              <span><a href='https://www.pexels.com/photo/pair-of-boots-by-clothes-rack-5424915/'>Photo by Arina Krasnikova</a></span>
            </div>
        </div>
        </>
    )
}