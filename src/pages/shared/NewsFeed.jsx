import NewsCover from "./NewsCover";
import { useLoaderData } from "react-router-dom";

const NewsFeed = () => {
  const news = useLoaderData();

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
