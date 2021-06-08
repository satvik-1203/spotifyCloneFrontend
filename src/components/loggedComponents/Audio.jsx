import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";

import { CurrentSongContext } from "../../context/CurrentSong";
import { useSelector } from "react-redux";
import { SongQueueContext } from "../../context/SongQ";

const Audio = () => {
  const { playState } = React.useContext(CurrentSongContext);
  const [play, setPlay] = playState;
  const { songQueue } = React.useContext(SongQueueContext);
  const tokens = useSelector((state) => state.userCredentials);
  const [songQ] = songQueue;

  return (
    <div className="songPlayer">
      {songQ[0] && (
        <SpotifyPlayer
          styles={{
            height: "5rem",
            activeColor: "#fff",
            bgColor: "#181818",
            color: "#fff",
            loaderColor: "#fff",
            sliderColor: "#1cb954",
            trackArtistColor: "#ccc",
            trackNameColor: "#fff",
          }}
          autoPlay="false"
          play={play}
          callback={({ isPlaying }) => setPlay(isPlaying)}
          token={tokens.tokenAccess}
          uris={songQ[0].uri}
        />
      )}
    </div>
  );
};

export default Audio;
