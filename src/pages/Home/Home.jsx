import { Link, Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Marquee from "react-fast-marquee";

import LeftSide from "../shared/LeftSide/LeftSide";
import RightSide from "../shared/RightSide";
import Nav from "../shared/Nav";


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

      <Nav></Nav>

      <div className="grid grid-cols-4 gap-6">
        <LeftSide></LeftSide>
        {/* <NewsFeed categoryId={categoryId}></NewsFeed> */}
        <Outlet></Outlet>
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default Home;
