import { NavLink } from "react-router-dom";
import UserImg from "../../assets/images/user.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Nav = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const NavLinks =
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logoutUser();
  }


  return (<>
    <div className="navbar bg-base-100 p-0 my-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {NavLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <img className="h-12 w-12 object-cover rounded-full border-4 mr-5 border-gray-200" src={user?.photoURL ? user.photoURL : UserImg} alt="" />
        {
          user ?
            <button
              onClick={handleLogout}
              className="bg-gray-800 hover:bg-gray-700 px-6 py-2.5 text-white font-medium text-lg rounded justify-self-end "
            >
              Logout
            </button> :
            <button
              onClick={handleLogin}
              className="bg-gray-800 hover:bg-gray-700 px-6 py-2.5 text-white font-medium text-lg rounded justify-self-end "
            >
              Login
            </button>
        }
      </div>
    </div>
  </>
  );
};

export default Nav;
