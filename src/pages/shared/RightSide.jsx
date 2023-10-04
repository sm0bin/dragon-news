import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";
import {
  RiFacebookFill,
  RiTwitterXFill,
  RiInstagramLine,
} from "react-icons/ri";
import Ad from "./Ad";

const RightSide = () => {
  const qZoneImages = [
    "../../../src/assets/images/qZone1.png",
    "../../../src/assets/images/qZone2.png",
    "../../../src/assets/images/qZone3.png",
  ];

  return (
    <aside className="space-y-5">
      <h2 className="font-semibold text-xl mb-5">Login With</h2>
      <div>
        <button className="btn btn-outline w-full mb-2 normal-case">
          <AiOutlineGoogle className="text-2xl" />
          Login with Google
        </button>
        <button className="btn btn-outline w-full normal-case">
          <AiOutlineGithub className="text-2xl" />
          Login with Github
        </button>
      </div>
      <h2 className="font-semibold text-xl">Find Us On</h2>

      <div className="border rounded">
        <div className="font-medium p-4 border-b flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gray-200 p-2">
            <RiFacebookFill className="m-auto text-gray-500" />
          </div>{" "}
          Facebook
        </div>
        <div className="font-medium p-4 border-b flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gray-200 p-2">
            <RiTwitterXFill className="m-auto text-gray-500" />
          </div>{" "}
          Twitter
        </div>
        <div className="font-medium p-4  flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gray-200 p-2">
            <RiInstagramLine className="m-auto text-gray-500" />
          </div>{" "}
          Instagram
        </div>
      </div>

      <div className="bg-gray-200 space-y-5 p-4 rounded">
        <h2 className="font-semibold text-xl">Q-Zone</h2>
        {qZoneImages.map((imgURL, idx) => (
          <img className="mx-auto" key={idx} src={imgURL} />
        ))}
      </div>

      <Ad></Ad>
    </aside>
  );
};

export default RightSide;
