import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

function Home() {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:mt-4">
      {loading ? (
        <h2 className="text-2xl font-bold">Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        products.map((product) => (
          <ProductItem
            key={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            productId={product._id}
          />
        ))
      )}
    </div>
  );
}

export default Home;
