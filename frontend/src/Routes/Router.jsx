import { createBrowserRouter } from "react-router-dom";
import MainRoute from "../Components/MainRoute";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Hero from "../Components/Hero";
import Notification from "../Pages/Notifications/Notification";
import Profile from "../Pages/Profile/Profile";
import CreatePost from "../Pages/CreatePost/CreatePost";
import EditProfile from "../Pages/EditProfile/EditProfile";
import PostDetails from "../Components/PostDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/notifications",
        element: (
          <PrivateRoute>
            <Notification />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile/:email",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/create-posts",
        element: (
          <PrivateRoute>
            <CreatePost />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-profile/:email",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/post-details/:id",
        element: (
          <PrivateRoute>
            <PostDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
