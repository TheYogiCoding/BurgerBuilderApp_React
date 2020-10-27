import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";

const navigationItems = (props) => {
  return (
    <ul className={classes.navigationItems}>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/" active>
        Checkout
      </NavigationItem>
    </ul>
  );
};

export default navigationItems;
