import { useEffect, useState } from 'react';
import { useOutletContext } from "react-router-dom";
import '../index.css'
export default function Description() {
    const [image, setImage] = useState([])
    const [items, setItems]  = useOutletContext()
    console.log(items)

  // setImage([...image, {imageClicked: cartInfo[0].imageClicked, imageSrc: cartInfo[0].imageSrc}])

    return(
    <>
  <div id="footer">
    <img src='' alt="" />
  <div>
    {}
    </div>
</div>
    </>
    )
}

