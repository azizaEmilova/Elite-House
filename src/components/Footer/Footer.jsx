import React from "react";
import fbook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import utube from "../../assets/utube.png";
import elite from '../../assets/elite.png';
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_box">
          <div className="footer__inner">
            <div className="one_block">
              <ul>
                <li>О нас</li>
                <li>Объекты</li>
                <li>Онлайн-камеры</li>
                <li>Новости</li>
                <li>Медиа</li>
                <li>Вакансии</li>
                <li>Забота о клиентах</li>
              </ul>
            </div>
            <div className="two_block">
              <ul>
                <li>Управляющая компания</li>
                <li>Агентская программа</li>
                <li>Способы оплаты</li>
                <li>Barter.kg</li>
                <li>Контакты</li>
                <li>Офисы продаж</li>
              </ul>
            </div>
            <div className="three_block">
              <ul>
                <li> Адрес: </li>
                <li>г.Бишкек, ул.</li>
                <li>Абдрахманова, 170/1,</li>
                <li> бизнес-центр «Ордо»,</li>
                <li>7 этаж</li>
              </ul>
            </div>
            <div className="social">
              <img src={fbook} alt="img" />
              <img src={insta} alt="img" />
              <img src={utube} alt="img" />
            </div>

            <div className="four_block">
              <ul>
                <li> Телефон: </li>
                <li>0 (555) 555 - 555</li>
                <li>0 (312) 463 - 434</li>
              </ul>
              <ul className="ul">
                <li>E-mail: </li>
                <li>elithouse@gmail.com</li>
              </ul>
            </div>
            <div className="elite">
              <img src={elite} alt="img" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
