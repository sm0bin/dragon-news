import Root from "../layouts/Root";
import { Router, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [{ path: "/", element: <Home></Home> }],
  },
]);

export default router;
