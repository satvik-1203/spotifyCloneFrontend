import React, { useState } from "react";
import PlayButton from "./PlayButton";

const TopSong = ({ topSong }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <div className="topResult">
        <div className="topResultHeading">Top result</div>
        <div
          className="topSearchResultCard"
          //

          // Hovering state

          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          {hover && <PlayButton topSong={topSong} />}

          <div className="imgContainer">
            <img src={topSong.album.images[0].url} alt="" />
            <div className="name">{topSong.name}</div>
            <div className="about">
              {topSong.explicit && <span className="explicit">E</span>}
              <span className="nameDiv">
                {topSong.artists.map((artist, index) => (
                  <span span key={artist.name}>
                    <span className="aboutName">{artist.name}</span>
                    {index !== topSong.artists.length - 1 ? (
                      <span>, </span>
                    ) : (
                      ""
                    )}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSong;
