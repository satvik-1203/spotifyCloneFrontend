import React, { useState } from "react";

const OtherSongs = ({ songs }) => {
  console.log(songs);

  const msTominutes = (ms) => {
    let minutes = Math.floor(ms / 60000);
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <div onClick={(e) => e.preventDefault()}>
      <div className="otherSongs">
        <div className="otherSongsTitle">Songs</div>
        <div className="otherSongsWrapper">
          {songs.map((song, index) => (
            <div className="otherSongCard">
              <div className="imageContainer">
                <img src={song.album.images[0].url} alt="" />
                <div className="nameWrapper">
                  <div className="name">{song.name}</div>
                  <div className="about">
                    {song.artists.map((artist, index) => (
                      <span key={artist.name}>{artist.name} </span>
                    ))}
                  </div>
                </div>

                <div className="timestamp">{msTominutes(song.duration_ms)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherSongs;