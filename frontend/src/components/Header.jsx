import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../redux/features/auth/authSlice";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    // localStorage.removeItem("cart");
    navigate("/");
    // window.location.reload();
  };

  return (
    <header className="flex justify-between items-center pt-10 pb-10">
      <div>
        <div>
          <Link className="font-semibold" to="/">
            e-Shop
          </Link>
        </div>
      </div>
      <ul className="flex justify-between items-center font-semibold">
        {user ? (
          <>
            <li className="mr-7">Hi {user.name}</li>

            <li className="mr-7">
              <Link to="/cart">
                <span>Cart {getCartCount() > 0 ? `- (${getCartCount()})` : ""}</span>
              </Link>
            </li>
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            {" "}
            <li className="mr-8">
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
