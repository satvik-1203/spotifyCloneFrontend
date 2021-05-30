import React from "react";

const TopSong = ({ topSong }) => {
  return (
    <div>
      <div className="topResult">
        <div className="topResultHeading">Top result</div>
        <div className="topSearchResultCard">
          <div className="imgContainer">
            <img src={topSong.album.images[0].url} alt="" />
            <div className="name">{topSong.name}</div>
            <div className="about">
              {topSong.explicit && <span className="explicit">E</span>}
              <span className="aboutName">{topSong.artists[0].name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSong;
