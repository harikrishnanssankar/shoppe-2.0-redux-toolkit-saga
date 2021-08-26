import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product__cardContainer">
      <h5>{product.category}</h5>
      <img
        className="product__cardImg"
        src={product.image}
        alt="error loading"
      />
      <h3>{product.title}</h3>
      <h4>Price: {product.price}</h4>
    </div>
  );
};
export default Product;
