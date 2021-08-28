import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct, removeSelectedProduct } from "../../redux/slices/productSlice";
import "./ProductDetails.css";
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const fetchProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    fetchProduct();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);
  if (!product.title)
    return (
      <div style={{position:'fixed', display:'flex', width:'100%', height:'100vh', alignItems:'center', justifyContent:'center'}} >
        <h1 style={{fontFamily:'"Roboto Slab", serif'}} >Loading...</h1>
      </div>
    );
  return (
    <div className="productDetails__container">
      <div>
        <img className="productDetails__img" src={product.image} alt="" />
        <div className="productDetaile__description">
          <h2>{product.title}</h2>
          <h3>$ {product.price}</h3>
          <p>{product.description}</p>
          <h3 className="productDetails__cartBtn">Add to Cart</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
