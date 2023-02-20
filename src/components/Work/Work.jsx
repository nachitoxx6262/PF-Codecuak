import React from "react";
import NavBar from "../NavBar/NavBar";
import Style from "./Work.module.css";
const Work = () => {
  return (
    <div className={Style.background}>
      <NavBar />
      <div className={Style.contenedor}>
        <h1>Work Cuak 🦆</h1>
        <br />
        <div className={Style.proximamente}>
          <h2>PROXIMAMENTE...</h2>
        </div>
      </div>
    </div>
  );
};

export default Work;
