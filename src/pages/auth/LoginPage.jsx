import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav from "../shared/Nav";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  console.log(location);


  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form);
    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);

    loginUser(email, password)
      .then(result => {
        console.log(result.user);

        navigate(location?.state ? location.state : "/");

      })
      .catch(error => {
        console.error(error);

      })


  };


  return (
    <div className="mt-12">
      <Nav></Nav>
      <div className="w-1/2 bg-white mx-auto px-24 py-20 shadow-md">
        <h1 className="font-semibold text-4xl text-center">
          Login your account
        </h1>
        <hr className="my-12" />
        <form onSubmit={handleLogin} className="card-body p-0 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered bg-gray-100"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary normal-case bg-gray-800 hover:bg-gray-700">
              Login
            </button>
          </div>
        </form>
        <h4 className="font-semibold mt-8">
          Dont’t Have An Account ?{" "}
          <Link to="/register" className="text-rose-500">
            Register
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default LoginPage;
