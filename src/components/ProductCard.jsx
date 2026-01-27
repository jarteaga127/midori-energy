import "../styles/product-card.css";

const ProductCard = ({products}) => {
    return ( 
<>
{products && products.map(({id, item, flavor, price}) => (
<div className="product-card" key={id}>
            <div className="product-pic"></div>
            <div className="product-text">
                <div className="product-name">
                    <div className="product-type">{item}</div>
                    <div className="product-flavor">{flavor}</div>
                </div>
                <div className="product-price">¥{price}</div>
            </div>
        </div>    
))}
        
</>
     );
}
 
export default ProductCard;