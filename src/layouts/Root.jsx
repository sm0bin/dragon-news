import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-poppins max-w-7xl mx-5 md:mx-8 xl:mx-auto">
      <h1>Hello</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
