import "../styles/cart-page.css";
import { Link } from "react-router-dom";

const CartPage = ({cart, removeFromCart}) => {

const total = cart.reduce((acc, item) => acc + item.price, 0);

    return ( 
        <section>
            <h1>Here is what's in your cart now:</h1>
            {cart.length === 0 ? (
                <div className="empty-cart">
    <p>Looks like your cart is empty.</p>
    <Link to="/shop" className='section-link'>Let's go shopping!</Link>
</div>
) : (
<div className="my-cart-container">
    {cart.map((item, index) => (
        <div key={index} className="cart-item">
            <span>{item.item}</span>
            <span>¥{item.price}</span>
            <button onClick={() => removeFromCart(index)}>Remove from cart</button>
        </div>
    ))}
</div>
)}
<div>
    <h3>Your total is ¥{total}</h3>
</div>
        </section>
     );
}
 
export default CartPage;