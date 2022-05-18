import React from "react";
import NewsItem from "../NewsItem/NewsItem";
import classes from "../CenterLeft/CenterLeft.module.css";

function CenterLeft() {
  return (
    <div className={classes.CenterLeft}>
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  );
}
export default CenterLeft;
