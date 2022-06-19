import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../redux/features/auth/authSlice";

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
          <Link to="/">e-Shop</Link>
        </div>
      </div>
      <ul className="flex justify-between items-center">
        {user ? (
          <>
            <li className="mr-5">Hi {user.name}</li>

            <li className="mr-5">
              <Link to="/cart">
                <i className="fas fa-shopping-cart"></i>
                <span>
                  Cart <span>{getCartCount()}</span>
                </span>
              </Link>
            </li>
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            {" "}
            <li className="mr-5">
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
