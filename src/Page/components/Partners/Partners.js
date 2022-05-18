import React from "react";
import PartnersItem from "../PartnersItem/PartnersItem";
import classes from "../Partners/Partners.module.css";

function Partners() {
  return (
    <div className={classes.Partners}>
      <PartnersItem />
      <PartnersItem />
      <PartnersItem />
      <PartnersItem />
      <PartnersItem />
      <PartnersItem />
    </div>
  );
}
export default Partners;
