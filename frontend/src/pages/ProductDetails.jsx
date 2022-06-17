import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

// Actions
import { getProductsDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

function ProductDetails() {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const { id } = useParams();

  const navigate = useNavigate();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductsDetails(id));
    }
  }, [dispatch, id, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    navigate(`/cart`);
  };

  return (
    <div>
      {" "}
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div>
            <div>
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div>
              <p>{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div>
            <div>
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <div>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
