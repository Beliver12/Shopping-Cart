import '../index.css'

export default function ShopPage() {
    return (
        <>
        <div id="header">
            <h1>Shopping Cart</h1>
             <div id='links'>
                <a href={`/shop-page`}>Shop-Page</a>
                <a href={`/`}>Home-Page</a>
             </div>
             <div id='cart-box'>
                <div id='cart'></div> 
                <p>&nbsp; :</p>
             </div>
        </div>
        </>
    )
}