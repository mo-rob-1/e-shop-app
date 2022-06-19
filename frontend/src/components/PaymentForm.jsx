import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

function PaymentForm() {
  const [success, setSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("/payment", {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          setSuccess(true);
          console.log("Payment successful");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(error.message);
    }
  };
  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="mb-5">
              <CardElement />
            </div>
          </fieldset>
          <button className="bg-slate-800 text-white font-semibold inline-block pl-10 pr-10 pt-4 pb-4 mt-2 text-sm rounded-md">
            Pay
          </button>
        </form>
      ) : (
        <div>
          <h2 className="text-3xl font-bold">Payment Successful.</h2>
        </div>
      )}
    </>
  );
}

export default PaymentForm;
