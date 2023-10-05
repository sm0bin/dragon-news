import { useLoaderData, useParams } from "react-router-dom";
import Header from "./Header";
import RightSide from "./RightSide";
import Nav from "./Nav";
import { FiEye } from "react-icons/fi";

const NewsDetails = () => {
    const news = useLoaderData();
    const { id } = useParams();
    const eachNews = news.find(aNews => aNews._id === id)
    const { _id, title, author, rating, total_view, details, image_url } = eachNews;


    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            <div className="grid grid-cols-4 gap-6">
                <div className="col-span-3">
                    <h2 className="font-semibold text-xl mb-5">Dragon News</h2>

                    <div className="p-8 border rounded">
                        <img className="w-full" src={image_url} alt="" />
                        <h1 className="font-bold text-xl mt-5">{title}</h1>
                        <p className="mt-4">
                            {details}
                        </p>

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
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default NewsDetails;