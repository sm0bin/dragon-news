import { useState } from "react";
import NewsCover from "./NewsCover";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from 'prop-types';

const NewsFeed = () => {
  const news = useLoaderData();
  const [displayNews, setDisplayNews] = useState(news);
  const { id } = useParams();
  console.log(id);

  const categoryId = id;

  useEffect(() => {
    const categoryNews = news.filter((eachNews) => (
      eachNews.category_id === categoryId
    ));
    if (categoryNews.length > 0) {
      setDisplayNews(categoryNews);
    } else {
      setDisplayNews(news);
    }


  }, [news, categoryId])


  return (
    <section className="col-span-2">
      <h2 className="font-semibold text-xl mb-5">Dragon News Home</h2>
      <div className="space-y-8">
        {displayNews.map((eachNews) => (
          <NewsCover key={eachNews["_id"]} eachNews={eachNews}></NewsCover>
        ))}
      </div>
    </section>
  );
};

NewsFeed.propTypes = {
  categoryId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}

export default NewsFeed;
