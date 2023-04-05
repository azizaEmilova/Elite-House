import React from "react";
import first_image from "../../../assets/media3.png";
import second_image from '../../../assets/media2.png'
import third_image from '../../../assets/mediaa1.png';
import rightt_arrow from '../../../assets/right.png';
import leftt_arrow from '../../../assets/left.png';

import "./Media.css";

const Media = () => {
  return (
    <div className="main__box">
      <div className="inner__box">
        <h2 className="title">Медиа</h2>
      </div>
      <div className="middle_box">
         {/* first box */}
        <div className="fisrt__box">
          <img className="media_img" src={first_image} alt="img" />
          <h4 className="titles">Новые офисы</h4>
          <hr />
          <p className="article">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более...
          </p>
        </div>
        {/* secounnd */}
        <div className="fisrt__box">
          <img className="media_img" src={second_image} alt="img" />
          <h4 className="titles">Новые офисы</h4>
          <hr />
          <p className="article">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более...
          </p>
        </div>
        {/* third */}
        <div className="fisrt__box">
          <img className="media_img" src={third_image} alt="img" />
          <h4 className="titles">Новые офисы</h4>
          <hr />
          <p className="article">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более...
          </p>
        </div>
      </div>
      <div className="arrows">
      <img className="rightt" src={rightt_arrow} alt="arrow" />
      <img className="leftt" src={leftt_arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default Media;
