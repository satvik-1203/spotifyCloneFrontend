import React from "react";
import OtherSongsWrapper from "./OtherSongsWrapper";

const OtherSongs = ({ songs }) => {
  console.log(songs);

  return (
    <div onClick={(e) => e.preventDefault()}>
      <div className="otherSongs">
        <div className="otherSongsTitle">Songs</div>
        <div className="otherSongsWrapper">
          {songs.map((song) => (
            <OtherSongsWrapper song={song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherSongs;
