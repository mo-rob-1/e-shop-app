import { useState } from "react";
import { useSelector } from "react-redux";
import StripeContainer from "../components/StripeContainer";

function Checkout() {
  const [disabled, setDisabled] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const saveAddress = (e) => {
    e.preventDefault();
    setDisabled(!disabled);
  };

  return (
    <>
      <h1>Checkout</h1>

      <div>
        <h2>Your Order</h2>
        {cartItems.map((item) => (
          <div key={item.product}>
            <div>
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <p>{item.name}</p>
            <p>£{item.price}</p>
            <p>{item.qty}</p>
          </div>
        ))}
      </div>

      <div>
        <h2>Shipping Address</h2>
        <form>
          <div>
            <label>Name:</label>
            <input type="text" name="name" placeholder="Name" disabled={disabled} />
          </div>
          <div>
            <label>Address:</label>
            <input type="text" name="address" placeholder="Address" disabled={disabled} />
          </div>
          <div>
            <label>City:</label>
            <input type="text" name="city" placeholder="City" disabled={disabled} />
          </div>
          <div>
            <label>Post Code:</label>
            <input type="text" name="post" placeholder="Post Code" disabled={disabled} />
          </div>
          <div>
            <label>Country:</label>
            <input type="text" name="country" placeholder="Country" disabled={disabled} />
          </div>
          {disabled ? (
            <button type="submit" onClick={saveAddress}>
              Edit
            </button>
          ) : (
            <button type="submit" onClick={saveAddress}>
              Save
            </button>
          )}
        </form>
      </div>

      <div>
        <h2>Make Payment</h2>
        <StripeContainer />
      </div>
    </>
  );
}

export default Checkout;
