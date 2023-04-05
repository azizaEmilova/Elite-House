import React from "react";
import right_arrow from "../../../assets/right.png";
import middle_arrow from "../../../assets/middle.png";
import left_arrow from "../../../assets/left.png";
import btn_img from "../../../assets/bts.png";
import "./Sale.css";

const Sale = () => {
  return (
    <div className="main__box">
      <div className="inner__box">
        <h2 className="title">Акции</h2>
      </div>
      <div className="middle_box">
        <img className="right" src={right_arrow} alt="arrow" />
        <img className="middle__img" src={middle_arrow} alt="img" />
        <img className="left" src={left_arrow} alt="arrow" />
      </div>
      <div className="btn_img ">
        <img src={btn_img } alt="img" />
      </div>
    </div>
  );
};

export default Sale;
