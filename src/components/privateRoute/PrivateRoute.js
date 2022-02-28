import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserAuthContext from "../../context/userContext";

const PrivateRoute = ({ children }) => {
  const { tokenUser } = useContext(UserAuthContext);

  if (!tokenUser) return <Navigate to="/login" />;

  return children;
};

export default PrivateRoute;
