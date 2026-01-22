import ProductCard from "../components/ProductCard";

const ShopPage = () => {
    return ( 
        <section>
            <h1>Let's see what's in store.</h1>
            <div className="shop-grid">
               <ProductCard/> 
            </div>
        </section>
     );
}
 
export default ShopPage;