import React, { useState, useEffect } from "react";
import "./Banner.css";
import BannerImage from "../../assets/images/Netflix-banner4.jpeg";
import axios from "../../infrastructure/Axios";
import requests from "../../infrastructure/Requests";

export const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    };

    fetchData();
  }, []);

  console.log(movie);

  {
    /* truncation Utility Function */
  }
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: ` url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam ducimus nulla at minus similique laboriosam deleniti distinctio, dolores itaque quisquam unde quibusdam dignissimos quis, corporis soluta exercitationem facere tempore recusandae.  Voluptatibus soluta error dolorum minima, blanditiis voluptates enim aspernatur temporibus facere facilis fuga laboriosam sequi adipisci nesciunt et distinctio laudantium fugiat doloremque minus omnis ab. Sapiente omnis vitae deserunt,`,
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};
