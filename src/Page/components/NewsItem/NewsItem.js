import React from "react";
import classes from "../NewsItem/NewsItem.module.css";

function NewsItem() {
  return (
    <a href="#">
      <div className={classes.NewsItem}>
        <h1>Новость</h1>
      </div>
    </a>
  );
}
export default NewsItem;
