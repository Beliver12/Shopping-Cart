import { useOutletContext } from "react-router-dom";

export default function CartContext() {
    const [itemId, setItemId] = useOutletContext()
    
    return(
    <>
    
<div>{itemId[0].id}</div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
   
    </>
    )
}