import React from "react";
import classes from "../BlogItem/BlogItem.module.css";
import BlogImg from "../../../images/BlogItem.jpeg";
function BlogItem() {
  return (
    <div className={classes.BlogItem}>
      {/* <img src={BlogImg} alt="pic" /> */}
      <p className={classes.BlogItem__text}>
        С ДНЁМ ПОБЕДЫ! Продолжаем тренировки в рамках ледового проекта —
        ПАТРИОТИЧЕСКОЕ ЛЕДОВОЕ ШОУ «СТАВРОПОЛЬСКИЕ ЗВЕЗДЫ НА ЛЬДУ-2022»,
        посвящённое Дню России
      </p>
      <span>24.05.22</span>
    </div>
  );
}
export default BlogItem;
