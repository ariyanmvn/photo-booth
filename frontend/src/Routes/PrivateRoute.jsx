import React, { useContext } from "react";
import { AuthContext } from "../Context/authcontext";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <LoadingSpinner />;
  }
  if(user&&user?.email){
    return children
  }
  return <Navigate state={location?.pathname} to={"/login"}/>;
}
