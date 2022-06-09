import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

function Home() {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return <div>Home</div>;
}

export default Home;
