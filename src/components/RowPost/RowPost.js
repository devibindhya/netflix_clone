import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { imageUrl } from "../../constants/constants";

/* import lucifer from "../../images/lucifer.jpg";
import squidgame from "../../images/squidgame.jpeg";
import decoupled from "../../images/decoupled.jpg"; */
import axios from "../../axios";

function Rowpost(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  }, []);

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className={props.isSmall ? "smallPosters" : "posters"}>
        {movies.map((obj) => (
          <img
            className="poster"
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Rowpost;
