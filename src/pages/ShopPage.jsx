import ProductCard from "../components/ProductCard";
import "../styles/shop-page.css";
import { Link } from 'react-router-dom';

const ShopPage = ({products, addToCart}) => {
    return ( 
        <section>
            <h1>Let's see what's in store.</h1>
            <div className="shop-grid">
                <ProductCard products={products} addToCart={addToCart} />    
            </div>
            <div className="home-link-cont">
                <Link to="/" className='link'>Back to Home</Link>
            </div>
        </section>
     );
}
 
export default ShopPage;