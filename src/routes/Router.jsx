import Root from "../layouts/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import NewsDetails from "../pages/shared/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import NewsFeed from "../pages/shared/NewsFeed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <NewsFeed></NewsFeed>,
            loader: () => fetch("/news.json"),
          },
          {
            path: "/category/:id",
            element: <NewsFeed></NewsFeed>,
            loader: () => fetch("/news.json"),
          }
        ]
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>
      },
      {
        path: "/news/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: () => fetch("/news.json")
      },
    ],
  },
]);

export default router;
