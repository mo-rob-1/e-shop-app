import { Link } from "react-router-dom";

function ProductItem({ imageUrl, description, price, name, productId }) {
  return (
    <div>
      <img src={imageUrl} alt={name} height="300px" />

      <div>
        <p>{name}</p>

        <p>{description.substring(0, 100)}...</p>

        <p>${price}</p>

        <Link to={`/product/${productId}`}>View</Link>
      </div>
    </div>
  );
}

export default ProductItem;
