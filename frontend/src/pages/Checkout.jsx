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
      <h1 className="md:mb-10 font-bold text-2xl">Checkout</h1>

      <div className="checkout-container">
        <div>
          <h2 className="font-bold text-lg">Your Order</h2>
          <div className="grid gap-6 mt-8">
            {cartItems.map((item) => (
              <div
                key={item.product}
                className="shadow rounded-bl-xl rounded-br-xl rounded-tr-xl product-item-container items-center"
              >
                <div className="md:h-full">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="rounded-tl-xl rounded-tr-xl w-full md:h-40 md:rounded-tr-none md:rounded-bl-xl object-cover"
                  />
                </div>

                <div className="pl-4 pr-4 pt-6 pb-6">
                  <h3 className="font-bold mb-2">{item.name}</h3>
                  <p className="font-bold mb-2">£{item.price}</p>
                  <p>
                    <span className="font-bold">Quantity:</span> {item.qty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <form className="shadow rounded-2xl p-6 mt-8 mb-8">
            <h2 className="font-bold mb-6 mt-2 text-lg">Shipping Address</h2>
            <div className="mb-4">
              <label className="font-semibold">Name:</label>
              <br></br>
              <input type="text" name="name" disabled={disabled} className="border w-full p-2 mt-1" />
            </div>
            <div className="mb-4">
              <label className="font-semibold">Address:</label> <br></br>
              <input type="text" name="address" disabled={disabled} className="border w-full p-2 mt-1" />
            </div>
            <div className="mb-4">
              <label className="font-semibold">City:</label> <br></br>
              <input type="text" name="city" disabled={disabled} className="border w-full p-2 mt-1" />
            </div>
            <div className="mb-4">
              <label className="font-semibold">Post Code:</label> <br></br>
              <input type="text" name="post" disabled={disabled} className="border w-full p-2 mt-1" />
            </div>
            <div className="mb-5">
              <label className="font-semibold">Country:</label> <br></br>
              <input type="text" name="country" disabled={disabled} className="border w-full p-2 mt-1" />
            </div>
            {disabled ? (
              <button
                type="submit"
                onClick={saveAddress}
                className="bg-black text-white font-bold inline-block pl-10 pr-10 pt-4 pb-4 mt-2 text-sm rounded-md"
              >
                Edit
              </button>
            ) : (
              <button
                type="submit"
                onClick={saveAddress}
                className="bg-slate-800 text-white font-semibold inline-block pl-10 pr-10 pt-4 pb-4 mt-2 text-sm rounded-md"
              >
                Save
              </button>
            )}
          </form>

          <div className="shadow rounded-2xl p-6">
            <h2 className="font-bold mb-6 mt-2 text-lg">Make Payment</h2>
            <StripeContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
