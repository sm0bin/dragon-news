import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiCalendar } from "react-icons/fi";

const LeftSide = ({ handleChooseCategory }) => {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <aside>
      <h2 className="font-semibold text-xl  mb-5">All Category</h2>

      <ul className="font-medium text-xl pb-4 text-gray-500">
        {categories.map((category) => (
          <li key={category.id} className="">
            {/* <button onClick={() => handleChooseCategory(category.id)}>{category.name}</button> */}
            <div onClick={() => handleChooseCategory(category.id)} className="cursor-pointer py-4">
              <h2 className="font-semibold text-xl px-12">{category.name}</h2>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-6">
        {news.slice(0, 4).map((item) => (
          <div key={item["_id"]} className="space-y-4">
            <img className="w-full" src={item["image_url"]} alt="" />
            <h2 className="font-semibold text-xl">{item.title}</h2>
            <div className="flex justify-between">
              <h3 className="font-medium">
                {
                  categories.find(
                    (category) => category.id === item["category_id"]
                  )?.name
                }
              </h3>

              <div className="flex items-center gap-2.5">
                <FiCalendar />
                <h3>{item.author?.published_date?.split(" ")[0]}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

LeftSide.propTypes = {
  handleChooseCategory: PropTypes.func,
}

export default LeftSide;
