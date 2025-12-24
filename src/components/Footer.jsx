import { Link } from 'react-router-dom';
import '../styles/footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

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
                <li><FaInstagram/><span className='sns-label'>Instagram</span></li>
                <li><FaSquareFacebook/><span className='sns-label'>Facebook</span></li>
                <li><FaXTwitter/><span className='sns-label'>X/Twitter</span></li>
                <li><FaYoutube/><span className='sns-label'>Youtube</span></li>
            </ul>
            </div>
            <div className="copyright">
                <span>2025 Joseph Arteaga</span>
            </div>
        </footer>
     );
}
 
export default Footer;