import { useLoaderData, useParams } from "react-router-dom";
import Header from "./Header";
import RightSide from "./RightSide";
import Nav from "./Nav";
import { FiCalendar, FiArrowLeft } from "react-icons/fi";

const NewsDetails = () => {
    const news = useLoaderData();
    const { id } = useParams();
    const eachNews = news.find(aNews => aNews._id === id)
    const { title, details, image_url } = eachNews;


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

                        <button className="bg-red-600 hover:bg-red-700 px-6 py-2.5 text-white font-medium text-lg rounded mt-8 flex items-center gap-1">
                            <FiArrowLeft className="text-2xl" />
                            All news in this category
                        </button>
                    </div>

                    <h2 className="font-semibold text-2xl mt-8 mb-5">Editors Insight</h2>
                    <div className=" grid grid-cols-3 gap-6">
                        {news.slice(0, 3).map((item) => (
                            <div key={item["_id"]} className="space-y-4">
                                <img className="w-full" src={item["image_url"]} alt="" />
                                <h2 className="font-semibold text-xl">{item.title}</h2>

                                <div className="flex items-center gap-2.5">
                                    <FiCalendar />
                                    <h3>{item.author?.published_date?.split(" ")[0]}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default NewsDetails;