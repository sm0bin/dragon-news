import { NavLink } from "react-router-dom";
import UserImg from "../../assets/images/user.png";

const Nav = () => {
  return (
    <nav className="flex items-center justify-center relative mt-8 mb-20">
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
        <img className="h-12" src={UserImg} alt="" />
        <button className="bg-gray-800 hover:bg-gray-700 px-6 py-2.5 text-white font-medium text-lg rounded justify-self-end ">
          Latest
        </button>
      </div>
    </nav>
  );
};

export default Nav;