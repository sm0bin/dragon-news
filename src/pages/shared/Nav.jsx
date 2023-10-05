import { NavLink } from "react-router-dom";
import UserImg from "../../assets/images/user.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Nav = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logoutUser();
  }


  return (
    <nav className=" flex items-center justify-center relative mt-8 mb-20">
      <ul className="flex gap-16 justify-center">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <NavLink to="/">Career</NavLink>
        </li>
      </ul>

      <div className="flex gap-5 absolute right-0">
        <img className="h-12 w-12 object-cover rounded-full border-4 border-gray-200" src={user?.photoURL ? user.photoURL : UserImg} alt="" />
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
    </nav>
  );
};

export default Nav;
