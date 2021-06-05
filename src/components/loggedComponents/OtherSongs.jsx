import React from "react";

const OtherSongs = ({ songs }) => {
  console.log(songs);

  const msTominutes = (ms) => {
    let minutes = Math.floor(ms / 60000);
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const [hoverState, setHoverState] = React.useState(false);

  return (
    <div onClick={(e) => e.preventDefault()}>
      <div className="otherSongs">
        <div className="otherSongsTitle">Songs</div>
        <div className="otherSongsWrapper">
          {songs.map((song) => (
            <div
              onMouseEnter={() => {
                setHoverState(true);
              }}
              onMouseLeave={() => {
                setHoverState(false);
              }}
              className="otherSongCard"
            >
              <div className={`imageContainer`}>
                <div className="imgContainer">
                  {hoverState && "onHover"}`
                  <img src={song.album.images[0].url} alt="" />
                </div>
                {}
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
