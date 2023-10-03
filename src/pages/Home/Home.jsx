import { Link, NavLink } from "react-router-dom";
import Header from "../shared/Header";
import Marquee from "react-fast-marquee";

const Home = () => {
  const breakingNews = [
    {
      title: "Global Summit Announced to Address Climate Crisis",
      description:
        "World leaders convene for an emergency summit to tackle the escalating climate crisis. Expectations are high for groundbreaking agreements on emissions reduction and environmental preservation.",
    },
    {
      title: "Major Cybersecurity Breach Hits Leading Tech Companies",
      description:
        "A sophisticated cyberattack has targeted prominent tech giants, compromising sensitive data and raising concerns over digital security. Experts are working round the clock to contain the breach.",
    },
    {
      title: "New COVID-19 Variant Detected; Health Authorities on High Alert",
      description:
        "A novel COVID-19 variant with potential vaccine resistance has emerged, prompting heightened surveillance and vaccine research. Health agencies worldwide are closely monitoring the situation.",
    },
  ];

  return (
    <div>
      <Header></Header>

      <div className="flex bg-gray-200">
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
      </div>

      <div className="flex items-center justify-center relative">
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
        <button className="bg-gray-800 hover:bg-gray-700 px-6 py-2.5 text-white font-medium text-lg rounded justify-self-end absolute right-0">
          Latest
        </button>
      </div>
    </div>
  );
};

export default Home;
