import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import { selectUser } from "../../app/userSlice";
import HomeScreen from "../../features/HomeScreen/HomeScreen";
import LoginScreen from "../../features/LoginScreen/LoginScreen";

// const user=null;



  export const Navigation = () => {
    const user = useSelector(selectUser)
    return (
      <Router>
        <Routes>
          {!user ? (
            <Route element={<LoginScreen />} path="/" />
          ) : (
            <Route exact element={<HomeScreen />} path="/" />
          )}

          {/* <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's No Page like this!!!</p>
              </main>
            }
          /> */}
        </Routes>
      </Router>
    );
  };


// export const Router = createBrowserRouter(
//  user = useSelector(selectUser),

//    !user
//     ? [
//         {
//           path: "/",
//           element: <LoginScreen />,
//         },
//       ]
//     : [
//         {
//           path: "/",
//           element: <HomeScreen />,
//         },
//       ]
// );


