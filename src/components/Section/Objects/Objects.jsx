import React from "react";
import img from "../../../assets/1img.png";
import imgA from "../../../assets/imgA.png";
import location from "../../../assets/location.png";
import secound_img from "../../../assets/2img.png";
import arrow from "../../../assets/arrow.png";
import third_img from "../../../assets/3img.png";
import fifth_img from "../../../assets/55.png";
import fourth_img from "../../../assets/images.png";
import rom from "../../../assets/Rome.png";
import mountain from "../../../assets/mountain.png";

import "./Objects.css";

const Object = () => {
  return (
    <div className="main__container">
      <div className="objects">
        <h2 className="objects_title">Объекты</h2>
        <button className="btn">Новые</button>
        <p className="word">Строящиеся</p>
        <p className="word">Завершенные</p>
      </div>
      {/* first block */}
      <div className="img__block">
        <div className="top__block">
          <div className="first_box">
            <img className="img_1" src={img} alt="image" />
            <div className="woord">
              <p>Александрия</p>
              <img src={imgA} alt="image" />
            </div>
            <hr></hr>
            <div className="woord2">
              <img src={location} alt="location" />
              <p>ул.Токтогула/Исанова</p>
            </div>
          </div>
          {/* secound block */}
          <div className="second_box">
            <img className="img_2" src={secound_img} alt="image" />
            <div className="classic">
              <p>Эль Классик</p>
              <img src={arrow} alt="image" />
            </div>
            <hr></hr>
            <div className="street">
              <img src={location} alt="location" />
              <p>ул. Коенкозова/ул. Чуйкова</p>
            </div>
          </div>
          {/* third block */}
          <div className="third_box">
            <img className="img_3" src={third_img} alt="image" />
            <div className="el_classic">
              <p>Эль Классик Плюс</p>
              <img src={arrow} alt="image" />
            </div>
            <hr></hr>
            <div className="street3">
              <img src={location} alt="location" />
              <p>ул.Коенкозова/Чуйкова</p>
            </div>
          </div>
        </div>
      </div>
      {/* fouth block */}
      <div className="top__block">
        <div className="first_box">
          <img className="img_1" src={fourth_img} alt="image" />
          <div className="woord">
            <p>Итальянский квартал</p>
            <img src={rom} alt="image" />
          </div>
          <hr></hr>
          <div className="woord2">
            <img src={location} alt="location" />
            <p>ул.С.Батора/А.Токомбаева</p>
          </div>
        </div>
        {/* fifth block */}
        <div className="second_box">
          <img className="img_2" src={fifth_img} alt="image" />
          <div className="classic">
            <p>Асанбай ордо</p>
            <img src={mountain} alt="image" />
          </div>
          <hr></hr>
          <div className="street">
            <img src={location} alt="location" />
            <p>ул.С.Батора/А.Токомбаева</p>
          </div>
        </div>
        {/* sixth block */}
        <div className="third_box">
          <img className="img_3" src={fifth_img} alt="image" />
          <div className="el_classic">
            <p>Континенталь</p>
            <img src={imgA} alt="image" />
          </div>
          <hr></hr>
          <div className="street3">
            <img src={location} alt="location" />
            <p>ул. Элебаева/Кулатова</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Object;

