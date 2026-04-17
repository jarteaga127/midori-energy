import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { RiCloseLargeFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { useAuth } from "../context/AuthProvider";
import { useCart } from "../context/CartProvider";


const Navbar = ({toggle, isOpen}) => {

    const { isLoggedIn, logout, userName } = useAuth();
  const { cart } = useCart();

   const containerClass = isOpen ? "side-menu-cont open" : "side-menu-cont";

   const sideMenuIcon = isOpen ? <RiCloseLargeFill/> : <FaBars/>;


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
                <li><Link to="/404" className='link'>Subscribe</Link></li>

                {isLoggedIn ? (
                    <div className="user-section">
            <span>Hi, {userName}!</span>
            <button onClick={logout} className="logout-btn">Logout</button>
          </div>
        ) : (<li><Link to="/login" className='link'>Login</Link></li>)}
                
            </ul>
            
            <div className="side-menu-btn" onClick={toggle} data-testid="side-menu-toggle">{sideMenuIcon}</div>
            
        </nav>
        <div className={containerClass} >
            <ul className="side-links">
                <li><Link to="/" className='link'>Home</Link></li>
                <li><Link to="/about-us" className='link'>About us</Link></li>
                <li><Link to="/shop" className='link'>Shop</Link> </li>
                <li><Link to="/my-cart" className='link'> My Cart ( {cart.length > 0 && <span className="cart-count">{cart.length}</span>})
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
        </>
     );
}
 
export default Navbar;