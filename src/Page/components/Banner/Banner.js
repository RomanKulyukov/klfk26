import React from "react";
import classes from "../Banner/Banner.module.css";

function Banner() {
  return (
    <a href="#">
      <div className={classes.Banner}>
        <h3 className={classes.Banner__text}>
          С ДНЁМ ПОБЕДЫ! Продолжаем тренировки в рамках ледового проекта —
          ПАТРИОТИЧЕСКОЕ ЛЕДОВОЕ ШОУ «СТАВРОПОЛЬСКИЕ ЗВЕЗДЫ НА ЛЬДУ-2022»,
          посвящённое Дню России
        </h3>
      </div>
    </a>
  );
}
export default Banner;
