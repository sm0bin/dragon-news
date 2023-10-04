import { Link, NavLink } from "react-router-dom";
import Header from "../shared/Header";
import Marquee from "react-fast-marquee";
import UserImg from "../../assets/images/user.png";

import LeftSide from "../shared/LeftSide";

const Home = () => {
  const breakingNews = [
    {
      title: "Global Summit Announced to Address Climate Crisis",
    },
    {
      title: "Major Cybersecurity Breach Hits Leading Tech Companies",
    },
    {
      title: "New COVID-19 Variant Detected; Health Authorities on High Alert",
    },
  ];

  return (
    <div>
      <Header></Header>

      <section className="flex bg-gray-200">
        <button className="bg-red-600 hover:bg-red-700 px-6 py-2.5 text-white font-medium text-lg rounded m-4">
          Latest
        </button>
        <Marquee className="font-medium text-lg space-x-20" pauseOnHover={true}>
          {breakingNews.map((item, id) => (
            <Link key={id} to="#">
              {item.title}.
            </Link>
          ))}
        </Marquee>
      </section>

      <section className="flex items-center justify-center relative">
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
      </section>

      <div className="grid grid-cols-4 gap-6">
        <LeftSide></LeftSide>
        <div className="col-span-2">
          <h2 className="font-semibold text-xl">Dragon News Home</h2>
        </div>
        <div>
          <h2 className="font-semibold text-xl">Login With</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
