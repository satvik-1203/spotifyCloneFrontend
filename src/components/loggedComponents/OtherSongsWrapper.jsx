import React from "react";

import { smallPlay, smallResume } from "../../misc/icons/playNresume";

import { CurrentSongContext } from "../../context/CurrentSong";

const OtherSongsWrapper = ({ song }) => {
  const msTominutes = (ms) => {
    let minutes = Math.floor(ms / 60000);
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const { songState, playState } = React.useContext(CurrentSongContext);

  const [currentSong, setCurrentSong] = songState;

  const [play, setPlay] = playState;

  const [hoverState, setHoverState] = React.useState(false);
  return (
    <div
      onMouseEnter={() => {
        setHoverState(true);
      }}
      onMouseLeave={() => {
        setHoverState(false);
      }}
      className="otherSongCard"
      onClick={(e) => {
        if (song !== currentSong) {
          setCurrentSong(song);
          setPlay(true);
          return;
        }
        setPlay(!play);
      }}
    >
      <div className="imageContainer">
        <div className="imgContainer">
          <img src={song.album.images[0].url} alt="" />
          {currentSong && currentSong.id === song.id ? (
            play ? (
              <div className="state">{smallResume()}</div>
            ) : (
              <div className="state">{smallPlay()}</div>
            )
          ) : (
            hoverState && <div className="state">{smallPlay()}</div>
          )}
        </div>

        <div className="nameWrapper">
          <div className="name">{song.name}</div>
          <div className="about">
            {song.artists.map((artist) => (
              <span key={artist.name}>{artist.name} </span>
            ))}
          </div>
        </div>
        <div className="endDetails">
          <div className="timestamp">{msTominutes(song.duration_ms)}</div>
        </div>
      </div>
    </div>
  );
};

export default OtherSongsWrapper;
