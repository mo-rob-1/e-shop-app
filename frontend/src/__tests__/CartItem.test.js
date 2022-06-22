import { render } from "@testing-library/react";
import CartItem from "../components/CartItem";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

describe("CartItem", () => {
  it("renders the cart item", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Provider store={store} history={history}>
        <Router>
          <CartItem />
        </Router>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders product item image", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CartItem />
        </Router>
      </Provider>
    );

    const productItemImage = getByTestId("product-item-image");
    expect(productItemImage).toBeTruthy();
  });

  it("renders product item name", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CartItem />
        </Router>
      </Provider>
    );

    const productItemName = getByTestId("product-item-name");
    expect(productItemName).toBeTruthy();
  });

  it("renders product item price", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CartItem />
        </Router>
      </Provider>
    );

    const productItemPrice = getByTestId("product-item-price");
    expect(productItemPrice).toBeTruthy();
  });

  it("renders product item quantity selector", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CartItem />
        </Router>
      </Provider>
    );

    const productItemQuantitySelector = getByTestId("product-qty-selector");
    expect(productItemQuantitySelector).toBeTruthy();
  });

  it("renders product item remove button", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CartItem />
        </Router>
      </Provider>
    );

    const productItemRemoveButton = getByTestId("remove-item-button");
    expect(productItemRemoveButton).toBeTruthy();
  });
});
