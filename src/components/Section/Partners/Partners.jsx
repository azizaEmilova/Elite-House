import React from "react";
import barter from '../../../assets/barter.png'
import barter2 from '../../../assets/137.png'

import './Partners.css'

const Partners =()=>{
   return (
      <div className="main_item">
         <div className="inner__box">
        <h2 className="head_title">Партнёры</h2>
      </div>
      <div className="box_box">
        <img src={barter} alt="img" />
        <img src={barter} alt="img" />
        <img src={barter2} alt="img" />
        <img src={barter} alt="img" />
        <img src={barter} alt="img" />
      </div>
      </div>
   )
}

export default Partners