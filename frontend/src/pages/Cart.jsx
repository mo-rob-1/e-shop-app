import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { BsArrowLeft } from "react-icons/bs";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2);
  };
  return (
    <>
      <div className="md:mt-8">
        <Link to="/">
          <span className="inline-flex font-semibold items-center shadow pl-5 pr-5 pt-2 pb-2 rounded">
            {" "}
            <BsArrowLeft className="mr-2" />
            Back
          </span>
        </Link>
      </div>
      <div className="checkout-container mt-8">
        <div>
          <h2 className="mb-10 font-bold text-2xl">Shopping Cart</h2>

          <div className="grid gap-5">
            {cartItems.length === 0 ? (
              <h2 className="text-xl font-bold" data-testid="cart-empty-text">
                Your Cart Is Empty{" "}
                <Link className="underline" to="/">
                  Go Back
                </Link>
              </h2>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={item.product}
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={removeFromCartHandler}
                />
              ))
            )}
          </div>
        </div>

        <div>
          <div className="shadow p-6 lg:p-10 rounded-xl mt-8">
            <p className="font-semibold mb-3" data-testid="subtotal-title-text">
              Subtotal ({getCartCount()}) items
            </p>
            <p className="font-bold text-2xl mb-3" data-testid="subtotal-price-text">
              £{getCartSubTotal()}
            </p>
            <div>
              <Link
                to="/checkout"
                className="bg-slate-800 text-white font-semibold inline-block pl-10 pr-10 pt-4 pb-4 mt-2 text-sm rounded-md w-full text-center"
                data-testid="checkout-button"
              >
                Proceed To Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
