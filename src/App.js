import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./infrastructure/Router/Navigation";

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
