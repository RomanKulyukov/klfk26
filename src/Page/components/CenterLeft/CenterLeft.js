import React from "react";

import BlogList from "../BlogList/BlogList";
import classes from "../CenterLeft/CenterLeft.module.css";

function CenterLeft() {
  return (
    <div className={classes.CenterLeft}>
      <BlogList />
    </div>
  );
}
export default CenterLeft;
