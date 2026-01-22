import "../styles/product-card.css";

const ProductCard = () => {
    return ( 
        <div className="product-card">
            <div className="product-pic"></div>
            <div className="product-text">
                <div className="product-name">
                    <div className="product-type">Cans</div>
                    <div className="product-flavor">Original Green Tea</div>
                </div>
                <div className="product-price">¥199</div>
            </div>
        </div>
     );
}
 
export default ProductCard;