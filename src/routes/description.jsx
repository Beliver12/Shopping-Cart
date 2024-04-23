import { useEffect, useState } from 'react';
import { useOutletContext } from "react-router-dom";
import '../index.css'
export default function Description() {
    const {items, setItems}  = useOutletContext()
    const {cartInfo, setCartInfo} = useOutletContext()
    console.log(items)

  // setImage([...image, {imageClicked: cartInfo[0].imageClicked, imageSrc: cartInfo[0].imageSrc}])

    return(
    <>
  <div id="footer2">
    <img src={items[0].src} alt="" />
  <div>
    {items[0].description}
    </div>
</div>
    </>
    )
}

