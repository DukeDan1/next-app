import AddToCart from "./AddToCart";

const ProductCard = () => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">Product Title</h5>
                <p className="card-text">Some quick example text to build on the product title and make up the bulk of the card's content.</p>
                <AddToCart />
            </div>
        </div>
    );
}

export default ProductCard;