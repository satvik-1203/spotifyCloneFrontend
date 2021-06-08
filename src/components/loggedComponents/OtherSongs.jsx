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
            <OtherSongsWrapper key={song.id} song={song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherSongs;
