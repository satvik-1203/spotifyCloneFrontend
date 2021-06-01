import React from "react";

import { CurrentSongContext } from "../../context/CurrentSong";

const Audio = () => {
  const { songState, playState } = React.useContext(CurrentSongContext);
  const [song] = songState;
  const audioRef = React.useRef(null);
  const [play] = playState;

  React.useEffect(() => {
    if (play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [play]);

  return (
    <div>
      {song && (
        <audio
          ref={audioRef}
          src={
            /*song.external_urls.spotify*/
            "https://mp3.chillhop.com/serve.php/?mp3=10075"
          }
        ></audio>
      )}
      {song && console.log("Song Loaded")}
    </div>
  );
};

export default Audio;
