import React from "react";
import classes from "../NavItem/NavItem.module.css";

function NavItem(props) {
  return (
    <div className={classes.NavItem}>
      <div>
        <a href="#">{props.children}</a>
      </div>
    </div>
  );
}
export default NavItem;
