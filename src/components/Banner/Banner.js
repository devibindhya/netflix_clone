import React from "react";
import "./Banner.css";
import got from "../../images/got.jpg";

function Banner() {
  console.log("banner");
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Game of Thrones</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">
          Game of Thrones is set in Westeros, where a battle rages between five
          noble families..
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
