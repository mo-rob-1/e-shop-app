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
          <form className="shadow rounded-2xl p-6 mt-8 mb-8" data-testid="shipping-address-form">
            <h2 className="font-bold mb-6 mt-2 text-lg">Shipping Address</h2>
            <div className="mb-4" data-testid="name-form-group">
              <label className="font-semibold" data-testid="name-label">
                Name:
              </label>
              <br></br>
              <input
                type="text"
                name="name"
                disabled={disabled}
                className="border w-full p-2 mt-1"
                data-testid="name-input"
              />
            </div>
            <div className="mb-4" data-testid="address-form-group">
              <label className="font-semibold" data-testid="address-label">
                Address:
              </label>{" "}
              <br></br>
              <input
                type="text"
                name="address"
                disabled={disabled}
                className="border w-full p-2 mt-1"
                data-testid="address-input"
              />
            </div>
            <div className="mb-4" data-testid="city-form-group">
              <label className="font-semibold" data-testid="city-label">
                City:
              </label>{" "}
              <br></br>
              <input
                type="text"
                name="city"
                disabled={disabled}
                className="border w-full p-2 mt-1"
                data-testid="city-input"
              />
            </div>
            <div className="mb-4" data-testid="post-code-form-group">
              <label className="font-semibold" data-testid="post-code-label">
                Post Code:
              </label>{" "}
              <br></br>
              <input
                type="text"
                name="post"
                disabled={disabled}
                className="border w-full p-2 mt-1"
                data-testid="post-code-input"
              />
            </div>
            <div className="mb-5" data-testid="country-form-group">
              <label className="font-semibold" data-testid="country-label">
                Country:
              </label>{" "}
              <br></br>
              <input
                type="text"
                name="country"
                disabled={disabled}
                className="border w-full p-2 mt-1"
                data-testid="country-input"
              />
            </div>

            <div data-testid="form-button">
              {disabled ? (
                <button
                  type="submit"
                  onClick={saveAddress}
                  className="bg-black text-white font-bold inline-block pl-10 pr-10 pt-4 pb-4 mt-2 text-sm rounded-md w-full"
                >
                  Edit
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={saveAddress}
                  className="bg-slate-800 text-white font-semibold inline-block pl-10 pr-10 pt-4 pb-4 mt-2 text-sm rounded-md w-full"
                >
                  Save
                </button>
              )}
            </div>
          </form>

          <div className="shadow rounded-2xl p-6" data-testid="make-payment-form">
            <h2 className="font-bold mb-6 mt-2 text-lg">Make Payment</h2>
            <StripeContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
