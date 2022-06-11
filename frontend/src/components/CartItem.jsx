import { Link } from "react-router-dom";

function CartItem({ item, qtyChangeHandler, removeHandler }) {
  return (
    <div>
      <div>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`}>
        <p>{item.name}</p>
      </Link>
      <p>${item.price}</p>
      <select value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button type="button" onClick={() => removeHandler(item.product)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default CartItem;
