import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export const PrivateRouterLender = ({ children }: any) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const convertStringToken = JSON.stringify(token);
  const decodedToken = jwt_decode<any>(convertStringToken);
  if (decodedToken?.role === 1) {
    return children;
  }
  return setTimeout(() => {
    navigate("/");
  }, 100);
};

export const PrivateRouterAdmin = ({ children }: any) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const convertStringToken = JSON.stringify(token);
  const decodedToken = jwt_decode<any>(convertStringToken);
  if (decodedToken?.role === 2) {
    return children;
  }
  return setTimeout(() => {
    navigate("/");
  }, 100);
};
