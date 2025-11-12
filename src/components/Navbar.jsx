import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = () => {
    return ( 
        <>
        <nav>
            <header><Link to="/" className='link'>Midori</Link></header>
            <ul>
                <li><Link to="/" className='link'>Home</Link></li>
                <li><Link to="/about-us" className='link'>About us</Link></li>
                <li>Shop</li>
                <li>Subscribe</li>
                <li>Login</li>
            </ul>
        </nav>
        </>
     );
}
 
export default Navbar;