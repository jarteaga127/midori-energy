import { Link } from "react-router-dom";

const CartPage = () => {
    return ( 
        <section>
            <h1>Here is what's in your cart now:</h1>
<div>
    <p>Looks like your cart is empty.</p>
    <Link to="/shop" className='link'>Let's go shopping!</Link>
</div>
        </section>
     );
}
 
export default CartPage;