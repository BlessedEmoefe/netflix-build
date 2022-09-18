import React,{useState,useEffect} from 'react';
import "./Navbar.css";
import AvatarImage1 from "../../assets/images/avatar1.png";
import LogoImage from "../../assets/images/logo.png";

export const Navbar = () => {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", transitionNavBar);
      return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);


  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img className="nav__logo" src={LogoImage} alt="netflix_logo" />

        <img className="nav__avatar" src={AvatarImage1} alt="avatar" />
      </div>
    </div>
  );
}
