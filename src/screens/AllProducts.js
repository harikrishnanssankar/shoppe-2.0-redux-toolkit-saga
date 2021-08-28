import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../components/Header/Header"
import Product from "../components/Product/Product";
import { getProducts } from "../redux/slices/allProductSlice";

const AllProducts = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const products = useSelector(state => state.allProducts)
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    return (
        <div>
            <Header />
            <div id="collection" className="productList__collections">
                {products.map((product) => {
                    return (
                        <div
                            className="productList__item"
                            key={product.id}
                            onClick={() => history.push(`/product/${product.id}`)}
                        >
                            <Product product={product} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default AllProducts
