import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

function StripeContainer() {
  const PUBLIC_KEY =
    "pk_test_51IWmfmIJfa4kbkTt6POQKBqoDvbh4drWM9QjgHNWa5lwVXTDF0WZsN2gpVYtbfdmItkc9b44mdXUDrGRDQxspWQJ00f2033aqv";

  const stripeTestPromise = loadStripe(PUBLIC_KEY);

  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}

export default StripeContainer;
