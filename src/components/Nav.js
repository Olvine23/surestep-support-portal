import React from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate()
  return (
    <div className="nav">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="controls-container">
        <div className="icon" onClick={() => navigate('/ticket')}>+</div>
        <div className="icon" onClick={() => navigate('/')}>--</div>

      </div>
    </div>
  );
};

export default Nav;
