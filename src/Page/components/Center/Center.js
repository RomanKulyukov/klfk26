import React from "react";
import CenterLeft from "../../components/CenterLeft/CenterLeft";
import CenterRight from "../../components/CenterRight/CenterRight";
import classes from "../Center/Center.module.css";

function Center() {
  return (
    <div className={classes.Center}>
      <CenterLeft />
      <CenterRight />
    </div>
  );
}
export default Center;
