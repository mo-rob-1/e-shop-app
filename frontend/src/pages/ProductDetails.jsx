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
        <h2 className="text-2xl font-bold">Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="md:grid md:grid-cols-2 md:gap-10 md:mt-10">
            <div>
              <img src={product.imageUrl} alt={product.name} />
            </div>

            <div className="mt-6 md:mt-0">
              <div>
                <div>
                  <h2 className="text-3xl font-bold">{product.name}</h2>
                  <p className="mt-4 mb-4 font-bold text-2xl">£{product.price}</p>

                  <p>{product.description}</p>
                </div>
              </div>
              <div>
                <div className="mt-4 grid gap-4">
                  <div>
                    <span className="font-bold mr-2">Status:</span>
                    <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
                  </div>
                  <div>
                    <span className="font-bold mr-2">Quantity:</span>
                    <select className="border" value={qty} onChange={(e) => setQty(e.target.value)}>
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    className="bg-slate-800 text-white text-center pt-3 pb-3 font-semibold mt-3"
                    type="button"
                    onClick={addToCartHandler}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
