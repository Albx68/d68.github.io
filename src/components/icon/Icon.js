import React from "react";
import "./icon.scss";
const Icon = ({ img, name, toggleCardHandler }) => {
  if (name === "scissor") {
    return (
      <div className="icon">
        {" "}
        <img src={img} alt="icon"></img>
        <div className="quantity">1</div>
      </div>
    );
  } else if (name === "card") {
    return (
      <div className="icon card" onClick={toggleCardHandler}>
        {" "}
        <img src={img} alt="icon" className="icon-card-img"></img>
        <div className="quantity">1</div>
      </div>
    );
  }
};

export default Icon;
