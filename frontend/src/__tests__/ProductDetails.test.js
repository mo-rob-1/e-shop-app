import { render } from "@testing-library/react";
import ProductDetails from "../pages/ProductDetails";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

describe("ProductDetails", () => {
  it("renders the product details page", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Provider store={store} history={history}>
        <Router>
          <ProductDetails />
        </Router>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the product details page image", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <ProductDetails />
        </Router>
      </Provider>
    );

    const productDetailsImage = getByTestId("product-details-image");
    expect(productDetailsImage).toBeTruthy();
  });

  it("renders the product details page name", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <ProductDetails />
        </Router>
      </Provider>
    );

    const productDetailsName = getByTestId("product-details-name");
    expect(productDetailsName).toBeTruthy();
  });

  it("renders the product details page description", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <ProductDetails />
        </Router>
      </Provider>
    );

    const productDetailsDescription = getByTestId("product-details-desc");
    expect(productDetailsDescription).toBeTruthy();
  });

  it("renders the product details page status", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <ProductDetails />
        </Router>
      </Provider>
    );

    const productDetailsStatus = getByTestId("product-details-status");
    expect(productDetailsStatus).toBeTruthy();
  });

  it("renders the product details page price", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <ProductDetails />
        </Router>
      </Provider>
    );

    const productDetailsPrice = getByTestId("product-details-price");
    expect(productDetailsPrice).toBeTruthy();
  });

  it("renders the product details page quantity", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <ProductDetails />
        </Router>
      </Provider>
    );

    const productDetailsQuantity = getByTestId("product-details-quantity-selector");
    expect(productDetailsQuantity).toBeTruthy();
  });

  it("renders the product details page add to cart button", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <ProductDetails />
        </Router>
      </Provider>
    );

    const productDetailsAddToCartButton = getByTestId("product-details-add-to-cart-button");
    expect(productDetailsAddToCartButton).toBeTruthy();
  });
});
