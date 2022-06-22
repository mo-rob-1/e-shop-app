import { render } from "@testing-library/react";
import ProductItem from "../components/ProductItem";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

describe("ProductItem", () => {
  it("renders the product item", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Provider store={store} history={history}>
        <Router>
          <ProductItem />
        </Router>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the product item image", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <ProductItem />
        </Router>
      </Provider>
    );

    const productItemImage = getByTestId("product-item-image");
    expect(productItemImage).toBeTruthy();
  });

  it("renders the product item name", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <ProductItem />
        </Router>
      </Provider>
    );

    const productItemName = getByTestId("product-item-name");
    expect(productItemName).toBeTruthy();
  });

  it("renders the product item description", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <ProductItem />
        </Router>
      </Provider>
    );

    const productItemDescription = getByTestId("product-item-desc");
    expect(productItemDescription).toBeTruthy();
  });

  it("renders the product item price", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <ProductItem />
        </Router>
      </Provider>
    );

    const productItemPrice = getByTestId("product-item-price");
    expect(productItemPrice).toBeTruthy();
  });

  it("renders the view product link", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <ProductItem />
        </Router>
      </Provider>
    );

    const viewProductItemLink = getByTestId("product-item-view-link");
    expect(viewProductItemLink).toBeTruthy();
  });
});
