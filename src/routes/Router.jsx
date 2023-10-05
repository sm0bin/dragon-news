import Root from "../layouts/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import NewsDetails from "../pages/shared/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json")
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
        element: <NewsDetails></NewsDetails>,
        loader: () => fetch("/news.json")
      },
    ],
  },
]);

export default router;
