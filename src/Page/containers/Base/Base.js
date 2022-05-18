import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Banner from "../../components/Banner/Banner";
import Center from "../../components/Center/Center";
import classes from "../Base/Base.module.css";
import logoLeft from "../../../images/logos/logo-left.png";
import logoRight from "../../../images/logos/logo-right.jpg";
class Base extends Component {
  render() {
    return (
      <div className={classes.Base}>
        <div className={classes.Base__page}>
          <div className={classes.Base___header}>
            <div className={classes.Base__logoLeft}>
              <a href="#">
                <img src={logoLeft} />
              </a>
            </div>
            <div className={classes.Base__logoRight}>
              <a href="#">
                {" "}
                <img src={logoRight} />
              </a>
            </div>
          </div>
          <Nav />
          <Banner />
          <Center />
        </div>
      </div>
    );
  }
}
export default Base;
