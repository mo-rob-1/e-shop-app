import { Link } from "react-router-dom";

function ProductItem({ imageUrl, description, price, name, productId }) {
  return (
    <div className="shadow-md rounded-bl-xl rounded-br-xl">
      <img
        src={imageUrl}
        alt={name}
        height="300px"
        className="rounded-tr-xl rounded-tl-xl w-full h-80 object-cover"
        data-testid="product-item-image"
      />

      <div className="pl-6 pr-6 pt-8 pb-8">
        <h2 className="font-bold text-lg mb-4" data-testid="product-item-name">
          {name}
        </h2>

        <p className="mb-3" data-testid="product-item-desc">
          {description?.substring(0, 100)}...
        </p>

        <p className="mb-3 font-bold text-2xl" data-testid="product-item-price">
          £{price}
        </p>

        <Link
          className="bg-slate-800 text-white font-bold inline-block pl-10 pr-10 pt-4 pb-4 mt-2 text-sm rounded-md"
          to={`/product/${productId}`}
          data-testid="product-item-view-link"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;
