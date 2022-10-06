import React, { useState } from "react";
import "./LoginScreen.css";
import LogoImage from "../../assets/images/logo.png";
import LoginScreenBg from "../../assets/images/loginScreen-bg.jpg";
import SignUpScreen from "../SignUpScreen/SignUpScreen";


const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div
        className="loginScreen__background"
        style={{
          background: `linear-gradient(to top,rgba(0,0,0,0.9) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,0.9) 100%), url(${LoginScreenBg})`,
        }}
      >
        <img className="loginScreen__logo" src={LogoImage} alt="logo" />

        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited movies, Tv shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
