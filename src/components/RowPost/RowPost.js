import React from "react";
import "./RowPost.css";

import lucifer from "../../images/lucifer.jpg";
import squidgame from "../../images/squidgame.jpeg";
import decoupled from "../../images/decoupled.jpg";

function Rowpost() {
  return (
    <div className="row">
      <h2>Title</h2>
      <div className="posters">
        <img className="poster" src={lucifer} alt="poster"></img>
        <img className="poster" src={squidgame} alt="poster"></img>
        <img className="poster" src={decoupled} alt="poster"></img>
        <img className="poster" src={lucifer} alt="poster"></img>
        <img className="poster" src={squidgame} alt="poster"></img>
        <img className="poster" src={decoupled} alt="poster"></img>
        <img className="poster" src={lucifer} alt="poster"></img>
        <img className="poster" src={squidgame} alt="poster"></img>
        <img className="poster" src={decoupled} alt="poster"></img>
        <img className="poster" src={lucifer} alt="poster"></img>
        <img className="poster" src={squidgame} alt="poster"></img>
        <img className="poster" src={decoupled} alt="poster"></img>
      </div>
    </div>
  );
}

export default Rowpost;
