import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { register, reset } from "../redux/features/auth/authSlice";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when user is logged in
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <h3 className="text-2xl font-bold mt-5 m-auto w-11/12 max-w-screen-2xl">Loading...</h3>;
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <section className="mt-10">
          <h1 className="text-3xl font-bold text-center">Register</h1>
          <form
            className="my-5 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-8 m-auto rounded-lg"
            onSubmit={onSubmit}
          >
            <div className="form-control w-full max-w-xs mb-5">
              <label>
                <span className="font-semibold">Name:</span>
              </label>
              <input
                type="text"
                data-testid="name-input"
                className="input input-bordered w-full max-w-xs border p-2 mt-2"
                id="name"
                value={name}
                name="name"
                onChange={onChange}
                required
              />
            </div>

            <div className="form-control w-full max-w-xs mb-5">
              <label>
                <span className="font-semibold">Email Address:</span>
              </label>
              <input
                type="email"
                data-testid="email-input"
                className="input input-bordered w-full max-w-xs border p-2 mt-2"
                id="email"
                value={email}
                name="email"
                onChange={onChange}
                required
              />
            </div>

            <div className="form-control w-full max-w-xs mb-5">
              <label>
                <span className="font-semibold">Enter Password:</span>
              </label>
              <input
                type="password"
                data-testid="password-input"
                className="input input-bordered w-full max-w-xs border p-2 mt-2"
                id="password"
                value={password}
                name="password"
                onChange={onChange}
                required
              />
            </div>

            <div className="form-control w-full max-w-xs mb-5">
              <label>
                <span className="font-semibold">Confirm Password:</span>
              </label>
              <input
                type="password"
                data-testid="confirm-password-input"
                className="input input-bordered w-full max-w-xs border p-2 mt-2"
                id="password2"
                value={password2}
                name="password2"
                onChange={onChange}
                required
              />
            </div>

            <div className="my-5">
              <button className="bg-slate-800 text-white font-semibold inline-block pl-10 pr-10 pt-4 pb-4 mt-2 text-sm rounded-md w-full">
                Register
              </button>
            </div>
          </form>
          <div className="text-center underline">
            <Link to="/login">Login Instead</Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Register;
