import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setProducts } from "../../redux/actions/productAction";
import Product from "../Product/Product";
import "./ProductList.css";

const ProductList = () => {
  const history = useHistory()
  const products = useSelector((state) => state.allProducts.products);
  const exclusive = products.slice(15, 18);
  const collections = products.slice(0, products.length).sort(() => Math.random() - 0.5).slice(0, 6)

  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
    console.log(products);
    return () => {};
  }, []);

  return (
    <div className="productList__container">
      <div id='exclusive' className='productList__exclusive' >
        <div className="productList__left">
          <h1>Exclusive</h1>
        </div>
        <div className="productList__right">
          {exclusive.map((product) => {
            return (
              <div
                className={`exclusive__productCard exclusive__productCard${product.id}`}
                key={product.id}
                onClick={() => history.push(`/product/${product.id}`) }
              >
                <img
                  className="exclusive__productImg"
                  src={product.image}
                  alt=""
                />
                <div className="exclusive__productSubCard">
                  <h3>{product.title}</h3>
                  <h3>Price: {product.price}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id='collection' className='productList__collections' >
        <h1>Collections</h1>
        {
          collections.map(product => {
            return(
              <div className="productList__item"  key={product.id} onClick={() => history.push(`/product/${product.id}`) } >
                <Product product={product} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default ProductList;
