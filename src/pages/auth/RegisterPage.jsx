import { Link } from "react-router-dom";
import Nav from "../shared/Nav";

const RegisterPage = () => {
  return (
    <div className="mt-12">
      <Nav></Nav>
      <div className="w-1/2 bg-white mx-auto px-24 py-20 shadow-md">
        <h1 className="font-semibold text-4xl text-center">
          Register your account
        </h1>
        <hr className="my-12" />
        <form className="card-body p-0 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Your Photo URL"
              className="input input-bordered bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
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
              placeholder="Enter your password"
              className="input input-bordered bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label cursor-pointer justify-normal gap-3">
              <input type="checkbox" className="checkbox" />
              <span className="label-text">
                Accept{" "}
                <Link to="/terms" className="font-semibold">
                  Term & Conditions
                </Link>
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary normal-case bg-gray-800 hover:bg-gray-700">
              Register
            </button>
          </div>
        </form>
        <h4 className="font-semibold mt-8">
          Have An Account ?{" "}
          <Link to="/login" className="text-rose-500">
            Login
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default RegisterPage;
