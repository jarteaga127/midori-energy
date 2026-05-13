import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { RiCloseLargeFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { useAuth } from "../context/AuthProvider";
import { useCart } from "../context/CartProvider";


const Navbar = ({toggle, isOpen}) => {

    const { isLoggedIn, logout, userName } = useAuth();
  const { cart, removeFromCart, getSubtotal, emptyCart } = useCart();

   const containerClass = isOpen ? "side-menu-cont open" : "side-menu-cont";

   const sideMenuIcon = isOpen ? <RiCloseLargeFill/> : <FaBars/>;

const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    return ( 
        <>
        <nav>
            <header><Link to="/" className='link'>Midori</Link></header>
            <ul className='nav-links'>
                <li><Link to="/" className='link'>Home</Link></li>
                <li><Link to="/about-us" className='link'>About us</Link></li>
                <li><Link to="/shop" className='link'>Shop</Link> </li>
                <li><Link to="/my-cart" className='link'> My Cart ( {cart.length > 0 && <span className="cart-count">{cart.length}</span>})
                 </Link> </li>

                {isLoggedIn ? (
                    <div className="user-section">
            <span>Hi, {userName}!</span>
            <div onClick={logout} className="logout-btn">Logout</div>
          </div>
        ) : (<li><Link to="/login" className='link'>Login</Link></li>)}
                
            </ul>
            
            <div className="side-menu-btn" onClick={toggle} data-testid="side-menu-toggle">{sideMenuIcon}</div>
            
        </nav>
        <div className={containerClass} >
            <div className="side-menu-wrapper">
                <div className="side-menu-left">
                    <ul className="side-links">
                <li><Link to="/" className='link'>Home</Link></li>
                <li><Link to="/about-us" className='link'>About us</Link></li>
                <li><Link to="/shop" className='link'>Shop</Link> </li>
                <li><Link to="/my-cart" className='link'> My Cart ({cart.length > 0 && <span className="cart-count">{cart.length}</span>})
                 </Link> </li>
                <li><Link to="/404" className='link'>Subscribe</Link></li>

                {isLoggedIn ? (
                    <div className="user-section">
            <span>Hi, {userName}!</span>
            <button onClick={logout} className="logout-btn">Logout</button>
          </div>
        ) : (<li><Link to="/login" className='link'>Login</Link></li>)}
            </ul>
            </div>
                <div className="side-menu-right">
                        <h3>What's in your cart right now?</h3>
            {cart.length === 0 ? (
                <div className="mini-cart-empty">
              <p className="empty-msg">Looks like your cart is empty.</p>
              <Link to="/shop" className='section-link'>Let's go shopping!</Link>
              </div>
            ) : (
              <div className="mini-cart-items">
    {cart.map((item) => (
      <div key={item.id} className="mini-item">
        <span>{item.name} (x{item.qty})</span>
        <span>¥{(item.price * item.qty).toLocaleString()}</span>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
        <div className="mini-total">
    
    
  </div>
      </div>
      
    ))}
  </div>
  
            )}
            <div className="side-empty-btn">
            <button onClick={emptyCart}>Empty my cart</button> 
            </div>
            <div className="side-subtotal">
            <strong>Your total: ¥{getSubtotal().toLocaleString()}</strong>      
            </div>     
                </div>
            </div>
            
            </div>
        </>
     );
}
 
export default Navbar;