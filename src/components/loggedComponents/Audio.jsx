import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";

import { CurrentSongContext } from "../../context/CurrentSong";
import { useSelector } from "react-redux";

const Audio = () => {
  const { songState, playState } = React.useContext(CurrentSongContext);
  const [song] = songState;
  const [play, setPlay] = playState;
  const tokens = useSelector((state) => state.userCredentials);

  // React.useEffect(() => {
  //   song && (play ? audioRef.current.play() : audioRef.current.pause());
  // }, [play]);

  return (
    <div className="songPlayer">
      {song && (
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
          uris={song.uri}
        />
      )}
    </div>
  );
};

export default Audio;
