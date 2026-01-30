import { Link } from "react-router-dom";

const CartPage = ({cart}) => {

const total = cart.reduce((acc, item) => acc + item.price, 0);

    return ( 
        <section>
            <h1>Here is what's in your cart now:</h1>
            {cart.length === 0 ? (
                <div>
    <p>Looks like your cart is empty.</p>
    <Link to="/shop" className='link'>Let's go shopping!</Link>
</div>
) : (
<div></div>
)}
<div>
    <h3>Your total is ¥{total}</h3>
</div>
        </section>
     );
}
 
export default CartPage;