import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

export const PrivateRouterLender = ({ children }: any) => {
  const navigate = useNavigate();
  const inforUser = useAppSelector(state => state.auth.inforUser)
  if (inforUser?.role === 1) {
    return children;
  }
  return setTimeout(() => {
    navigate("/");
  }, 100);
};

export const PrivateRouterAdmin = ({ children }: any) => {
  const navigate = useNavigate();
  const inforUser = useAppSelector(state => state.auth.inforUser)
  if (inforUser?.role === 2) {
    return children;
  }
  return setTimeout(() => {
    navigate("/");
  }, 100);
};
