import { FiBookmark, FiShare2, FiEye } from "react-icons/fi";
import PropTypes from "prop-types";

const NewsCover = ({ eachNews }) => {
  const { title, author, rating, total_view, details, image_url } = eachNews;

  return (
    //   Main Card
    <div className="border rounded">
      {/*Author details  */}
      <div className="flex bg-gray-200 p-5 justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src={author.img}
            alt=""
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <h3 className="text-sm">{author.published_date?.split(" ")[0]}</h3>
          </div>
        </div>
        <div className="flex">
          <button className="btn btn-ghost p-2">
            <FiBookmark className="text-2xl" />
          </button>
          <button className="btn btn-ghost p-2">
            <FiShare2 className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-5">
        <h1 className="font-bold text-xl mb-5">{title}</h1>
        <img src={image_url} alt="" />
        <p className="mt-8">{details}</p>
        <hr className="my-5" />
        <div className="flex justify-between">
          <h4>{rating.number}</h4>
          <div className="flex items-center gap-2">
            <FiEye />
            <h4>{total_view}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCover.propTypes = {
  eachNews: PropTypes.object,
};

export default NewsCover;
