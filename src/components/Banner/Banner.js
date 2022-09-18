import React from "react";
import "./Banner.css";
import BannerImage from "../../assets/images/Netflix-banner4.jpeg";

export const Banner = () => {

{/* truncation Utility Function */}
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: ` url(${BannerImage})`,
        backgroundSize: "cover",
        // backgroundRepeat: "round",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, magnam ducimus nulla at minus similique laboriosam deleniti distinctio, dolores itaque quisquam unde quibusdam dignissimos quis, corporis soluta exercitationem facere tempore recusandae.  Voluptatibus soluta error dolorum minima, blanditiis voluptates enim aspernatur temporibus facere facilis fuga laboriosam sequi adipisci nesciunt et distinctio laudantium fugiat doloremque minus omnis ab. Sapiente omnis vitae deserunt,`,150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};
