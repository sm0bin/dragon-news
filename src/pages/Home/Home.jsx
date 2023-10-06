import { Link } from "react-router-dom";
import Header from "../shared/Header";
import Marquee from "react-fast-marquee";

import LeftSide from "../shared/LeftSide/LeftSide";
import RightSide from "../shared/RightSide";
import NewsFeed from "../shared/NewsFeed";
import Nav from "../shared/Nav";
import { useState } from "react";


const Home = () => {
  const [categoryId, setCategoryId] = useState(0);

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

  const handleChooseCategory = (id) => {
    setCategoryId(id);

  }

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
        <LeftSide handleChooseCategory={handleChooseCategory}></LeftSide>
        <NewsFeed categoryId={categoryId}></NewsFeed>
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default Home;
