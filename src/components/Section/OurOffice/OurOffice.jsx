import React from "react";
import map from "../../../assets/map.png";
import inner_map from "../../../assets/ordo1.png";
import icons from '../../../assets/icon.png';

import "./OurOffice.css";

const OurOffice = () => {
  return (
    <div className="box">
      <div className="inner__box">
        <h2 className="titless">Наши офисы</h2>
      </div>
      <div className="inner__box">
        <img src={map} alt="img" />
      </div>
      <div className="icons">
        <img className="icon" src={icons} alt="img" />
        <img className="icon2" src={icons} alt="img" />
        <img className="icon3" src={icons} alt="img" />
        <img className="icon4" src={icons} alt="img" />
        <img className="inner_map" src={inner_map} alt="icon" />
      </div>
    </div>
  );
};

export default OurOffice;
