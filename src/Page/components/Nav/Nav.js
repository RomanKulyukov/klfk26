import React, { Component } from "react";
import NavItem from "../NavItem/NavItem";
import classes from "../Nav/Nav.module.css";

class Nav extends Component {
  render() {
    return (
      <div className={classes.Nav}>
        <NavItem>ГЛАВНАЯ</NavItem>
        <NavItem>О КЛУБЕ</NavItem>
        <NavItem>«ФИГУРНОЕ КАТАНИЕ — СПОРТ ДЛЯ ВСЕХ!»</NavItem>
        <NavItem>«СТАВРОПОЛЬСКИЙ ШОУ-БАЛЕТ НА ЛЬДУ»</NavItem>
        <NavItem>РАСПИСАНИЕ ЗАНЯТИЙ</NavItem>
        <NavItem>СОРЕВНОВАНИЯ</NavItem>
        <NavItem>ЛЕДОВЫЕ ШОУ</NavItem>
        <NavItem>РАСПИСАнИЕ СОРЕВНОВАНИЙ</NavItem>
        <NavItem>СМИ О НАС</NavItem>
      </div>
    );
  }
}
export default Nav;
