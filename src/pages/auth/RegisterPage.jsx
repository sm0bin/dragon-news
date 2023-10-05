import { Link } from "react-router-dom";
import Nav from "../shared/Nav";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const RegisterPage = () => {
  const { registerUser, updateUserInfo } = useContext(AuthContext);


  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    console.log(name, photo, email, password);

    registerUser(email, password)
      .then(result => {
        console.log(result.user);

      })
      .catch(error => {
        console.error(error);

      })

    updateUserInfo(name, photo)
      .then(result => {
        console.log(result.user);

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
          Register your account
        </h1>
        <hr className="my-12" />
        <form onSubmit={handleRegister} className="card-body p-0 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
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
              name="photo"
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
              name="email"
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
              name="password"
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
