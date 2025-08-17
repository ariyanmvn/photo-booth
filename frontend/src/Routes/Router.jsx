import { createBrowserRouter } from "react-router-dom";
import MainRoute from "../Components/MainRoute";
import App from "../App";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <h1>About page</h1>,
      },
      {
        path: "/contact",
        element: <h1>contact</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
