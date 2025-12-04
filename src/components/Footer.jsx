import { Link } from 'react-router-dom';
import '../styles/footer.css'

const Footer = () => {
    return ( 
        <footer>
            
            <div className="footer-link-group">
            <header><Link to="/" className='footer-link'>Midori</Link></header>    
            <ul>
                <li><Link to="/" className='footer-link'>Home</Link></li>
                <li><Link to="/about-us" className='footer-link'>About us</Link></li>
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
            </div>
            <div className="copyright">
                <span>2025 Joseph Arteaga</span>
            </div>
        </footer>
     );
}
 
export default Footer;