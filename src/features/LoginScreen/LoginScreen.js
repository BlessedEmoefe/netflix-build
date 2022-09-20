import React from 'react';
import "./LoginScreen.css";
import LoginScreenBg from "../../assets/images/loginScreen-bg.jpg"

const LoginScreen = () => {
  return (
    <div className='loginScreen'>
        <div className="loginScreen__background">
            <img className='loginScreen__logo' src={LoginScreenBg} alt="login_background" />
        </div>
    </div>
  )
}

export default LoginScreen