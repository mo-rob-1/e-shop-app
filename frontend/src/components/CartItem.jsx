import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

function CartItem({ item, qtyChangeHandler, removeHandler }) {
  return (
    <div className="shadow rounded-tr-xl rounded-bl-xl rounded-br-xl product-item-container">
      <div className="md:h-full">
        <img
          src={item?.imageUrl}
          data-testid="product-item-image"
          alt={item?.name}
          className="rounded-tl-xl rounded-tr-xl w-full md:h-40 md:rounded-tr-none md:rounded-bl-xl object-cover"
        />
      </div>

      <div className="pl-4 pr-4 pt-6 pb-6 grid gap-3">
        <div className="flex justify-between items-center">
          <div>
            <Link to={`/product/${item?.product}`}>
              <p className="font-bold mb-2" data-testid="product-item-name">
                {item?.name}
              </p>
            </Link>
            <p className="font-bold mb-2" data-testid="product-item-price">
              £{item?.price}
            </p>

            <div data-testid="product-qty-selector">
              Quantity:
              <select
                className="border ml-2"
                value={item?.qty}
                onChange={(e) => qtyChangeHandler(item?.product, e.target.value)}
              >
                {[...Array(item?.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="button" onClick={() => removeHandler(item?.product)} data-testid="remove-item-button">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
