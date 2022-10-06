import React, { useEffect } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Navigation } from "./infrastructure/Router/Navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./app/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        console.log("No User");
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Navigation />
    </div>
  );
}

export default App;
