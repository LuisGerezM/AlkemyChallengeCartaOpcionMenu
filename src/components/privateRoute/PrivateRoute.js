import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserAuthContext from "../../context/userContext";

const PrivateRoute = ({ children }) => {
  const { tokenUser } = useContext(UserAuthContext);

  console.log("tokenUser", tokenUser);

  // ver después si le dejamos el state ;; <Navigate to="/login" state={{ location }} />;
  if(!tokenUser) return <Navigate to='/login' />

  return children
};

export default PrivateRoute;
