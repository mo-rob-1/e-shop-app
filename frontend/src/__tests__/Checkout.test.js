import { render } from "@testing-library/react";
import Checkout from "../pages/Checkout";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

describe("Checkout", () => {
  it("renders the checkout page", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Provider store={store} history={history}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders checkout title text", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByText("Checkout")).toBeInTheDocument();
  });

  it("renders your order title text", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByText("Your Order")).toBeInTheDocument();
  });

  it("renders shipping address title text", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByText("Shipping Address")).toBeInTheDocument();
  });

  it("renders the shipping address form", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByTestId("shipping-address-form")).toBeInTheDocument();
  });

  it("renders the name form group", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByTestId("name-form-group")).toBeInTheDocument();
  });

  it("renders the name label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByTestId("name-label")).toBeInTheDocument();
  });

  it("renders the name input", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByTestId("name-input")).toBeInTheDocument();
  });

  it("renders the address form group", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByTestId("address-form-group")).toBeInTheDocument();
  });

  it("renders the address label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByTestId("address-label")).toBeInTheDocument();
  });

  it("renders the address input", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByTestId("address-input")).toBeInTheDocument();
  });

  it("renders the city form group", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByTestId("city-form-group")).toBeInTheDocument();
  });

  it("renders the city label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByTestId("city-label")).toBeInTheDocument();
  });

  it("renders the city input", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByTestId("city-input")).toBeInTheDocument();
  });

  it("renders the post code form group", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByTestId("post-code-form-group")).toBeInTheDocument();
  });

  it("renders the post code label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByTestId("post-code-label")).toBeInTheDocument();
  });

  it("renders the post code input", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByTestId("post-code-input")).toBeInTheDocument();
  });

  it("renders the country form group", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByTestId("country-form-group")).toBeInTheDocument();
  });

  it("renders the country label", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByTestId("country-label")).toBeInTheDocument();
  });

  it("renders the country input", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByTestId("country-input")).toBeInTheDocument();
  });

  it("renders the form button", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByTestId("form-button")).toBeInTheDocument();
  });

  it("renders the make payment form", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(getByTestId("make-payment-form")).toBeInTheDocument();
  });
});
