import React from "react";
import logo from "../../assets/main_header_img.png";
import elite_house_logo from "../../assets/EH_logo_w.png";
import icons1 from "../../assets/facebook.png";
import icons2 from "../../assets/utube.png";
import icons3 from "../../assets/Group 194.png";
import icons4 from "../../assets/insta.png";
import icons5 from "../../assets/number.png";
import icons6 from "../../assets/Union.png";
import workingOnline from "../../assets/weAreWorkingOnline.png";
import application from "../../assets/Group 204.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img className="logo" src={logo} alt="logo" />
        <img className="icon_logo" src={elite_house_logo} alt="logo" />
        <div className="main_div">
          <div>
            <ul className="menu">
              <li>О нас</li>
              <li>Объекты</li>
              <li>Коммерция</li>
              <li>Новости</li>
              <li>Забота о клиентах</li>
              <li>Инвесторам</li>
              <li>Контакты</li>
              <li clsssName="ru">RU</li>
            </ul>
          </div>
          <div className="icons">
            <img src={icons1} alt="icons" />
            <img src={icons2} alt="icons" />
            <img src={icons4} alt="icons" />
            <img src={icons3} alt="icons" />

            <p>0555 555 555</p>
            <img src={icons6} alt="icons" />
          </div>
        </div>
        <div className="btns">
          <img className="online" src={workingOnline} alt="img" />
          <img className="app" src={application} alt="img" />
          {/* <button className="first_btn">Мы работаем онлайн</button>
          <button className="second_btn">Оставить заявку</button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
