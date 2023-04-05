import React from "react";
import AboutUs from "../Section/AboutUs/AboutUs";
import Objects from "../Section/Objects/Objects";
import Sale from "../Section/Sale/Sale";
import Media from '../Section/Media/Media'
import OurOffice from '../Section/OurOffice/OurOffice'
import Partners from "../Section/Partners/Partners";
// import Section from "../Section/Section";

const Main = () => {
  return (
    <div>
      <AboutUs />
      <Objects />
      <Sale />
      <Media/>
      <OurOffice/>
      <Partners/>
    </div>
  );
};
export default Main;
