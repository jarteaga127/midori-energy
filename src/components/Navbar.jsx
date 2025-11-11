import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = () => {
    return ( 
        <>
        <nav>
            <header>Midori</header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About us</Link></li>
                <li>Shop</li>
                <li>Subscribe</li>
                <li>Login</li>
            </ul>
        </nav>
        </>
     );
}
 
export default Navbar;