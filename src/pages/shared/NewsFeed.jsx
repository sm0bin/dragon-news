import { useEffect, useState } from "react";
import NewsCover from "./NewsCover";

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <section className="col-span-2">
      <h2 className="font-semibold text-xl mb-5">Dragon News Home</h2>
      <div className="space-y-8">
        {news.map((eachNews) => (
          <NewsCover key={eachNews["_id"]} eachNews={eachNews}></NewsCover>
        ))}
      </div>
    </section>
  );
};

export default NewsFeed;
