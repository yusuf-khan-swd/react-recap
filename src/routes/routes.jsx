import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
