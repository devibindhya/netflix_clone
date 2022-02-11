import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { API_KEY, imageUrl } from "../../constants/constants";

/* import lucifer from "../../images/lucifer.jpg";
import squidgame from "../../images/squidgame.jpeg";
import decoupled from "../../images/decoupled.jpg"; */
import axios from "../../axios";
import YouTube from "react-youtube";

function Rowpost(props) {
  const [movies, setMovies] = useState([]);
  const [utubeid, setutubeId] = useState("");
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
  const opts = {
    height: "390",
    width: "1005",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setutubeId(response.data.results[0]);
        } else {
          console.log("Trailer coming soon");
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className={props.isSmall ? "smallPosters" : "posters"}>
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className="poster"
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
          ></img>
        ))}
      </div>
      {utubeid && <YouTube videoId={utubeid.key} opts={opts} />}
    </div>
  );
}

export default Rowpost;
