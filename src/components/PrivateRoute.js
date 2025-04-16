import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const sessionUser = JSON.parse(sessionStorage.getItem("user"));
  return (user || sessionUser) ? children : <Navigate to="/login" />;
};

export default PrivateRoute;