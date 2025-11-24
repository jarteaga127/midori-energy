import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import { FaBars } from "react-icons/fa6";

const Navbar = ({toggle, isOpen}) => {

   const containerClass = isOpen ? "side-menu-cont open" : "side-menu-cont";


    return ( 
        <>
        <nav>
            <header><Link to="/" className='link'>Midori</Link></header>
            <ul className='nav-links'>
                <li><Link to="/" className='link'>Home</Link></li>
                <li><Link to="/about-us" className='link'>About us</Link></li>
                <li>Shop</li>
                <li>Subscribe</li>
                <li>Login</li>
            </ul>
            
            <div className="side-menu-btn" onClick={toggle}><FaBars/></div>
            
        </nav>
        <div className={containerClass} >
            <ul className="side-links">
                <li><Link to="/" className='link'>Home</Link></li>
                <li><Link to="/about-us" className='link'>About us</Link></li>
                <li>Shop</li>
                <li>Subscribe</li>
                <li>Login</li>
            </ul>
            </div>
        </>
     );
}
 
export default Navbar;