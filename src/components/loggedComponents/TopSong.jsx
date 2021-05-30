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
              <span className="nameDiv">
                {topSong.artists.map((artist, index) => (
                  <>
                    <span key={artist.name} className="aboutName">
                      {artist.name}
                    </span>
                    {index !== topSong.artists.length - 1 ? (
                      <span>, </span>
                    ) : (
                      ""
                    )}
                  </>
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
