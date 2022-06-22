import { render } from "@testing-library/react";
import Cart from "../pages/Cart";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

describe("Cart", () => {
  it("renders the cart page", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Provider store={store} history={history}>
        <Router>
          <Cart />
        </Router>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders shopping cart title text", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>
    );
    expect(getByText("Shopping Cart")).toBeInTheDocument();
  });

  it("renders cart empty text", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>
    );

    const cartEmptyText = getByTestId("cart-empty-text");
    expect(cartEmptyText).toBeTruthy();
  });

  it("renders subtotal title text", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>
    );
    expect(getByTestId("subtotal-title-text")).toBeInTheDocument();
  });

  it("renders subtotal price text", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>
    );
    expect(getByTestId("subtotal-price-text")).toBeInTheDocument();
  });

  it("renders checkout button", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>
    );
    expect(getByTestId("checkout-button")).toBeInTheDocument();
  });
});
