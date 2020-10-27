import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const logo = (props) => (
  <div>
    <img className={classes.Logo} src={burgerLogo} alt={props.alt} />
  </div>
);

export default logo;
