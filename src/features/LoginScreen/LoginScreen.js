import React from "react";
import "./LoginScreen.css";
import LogoImage from "../../assets/images/logo.png";
import LoginScreenBg from "../../assets/images/loginScreen-bg.jpg";

const LoginScreen = () => {
  return (
    <div className="loginScreen">
      <div
        className="loginScreen__background"
        style={{
          background: `linear-gradient(to top,rgba(0,0,0,0.9) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,0.9) 100%), url(${LoginScreenBg})`,
        }}
      >
        <img className="loginScreen__logo" src={LogoImage} alt="logo" />

        <button className="loginScreen__button">Sign In</button>
      </div>

      <div className="loginScreen__body">
        
      </div>
    </div>
  );
};

export default LoginScreen;
