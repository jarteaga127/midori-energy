import { Link } from 'react-router-dom';
import '../styles/footer.css'

const Footer = () => {
    return ( 
        <footer>
            <header><Link to="/">Midori</Link></header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About us</Link></li>
                <li>Shop</li>
                <li>Subscribe</li>
            </ul>
            <ul>
                <h3>Follow us!</h3>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>X/Twitter</li>
                <li>Youtube</li>
            </ul>
        </footer>
     );
}
 
export default Footer;