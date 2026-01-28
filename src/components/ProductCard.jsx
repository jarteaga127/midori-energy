import "../styles/product-card.css";

const ProductCard = ({products, addToCart}) => {
    return ( 
<>
{products && products.map((product) => (
<div className="product-card" key={product.id}>
            <div className="product-pic"></div>
            <div className="product-text">
                <div className="product-name">
                    <div className="product-type">{product.item}</div>
                </div>
                <div className="product-price">¥{product.price}</div>
                <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>
        </div>    
))}
        
</>
     );
}
 
export default ProductCard;