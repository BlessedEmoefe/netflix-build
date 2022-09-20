import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../../features/HomeScreen/HomeScreen";
import LoginScreen from "../../features/LoginScreen/LoginScreen";

const user = null;

export const router = createBrowserRouter(
  !user
    ? [
        {
          path: "/",
          element: <LoginScreen />,
        },
      ]
    : [
        {
          path: "/",
          element: <HomeScreen />,
        },
      ]
);
