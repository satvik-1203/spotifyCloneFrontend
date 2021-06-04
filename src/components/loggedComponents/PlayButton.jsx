import React from "react";
import { resume, pause } from "../../misc/icons/playNresume";

// Framer motion

import { motion } from "framer-motion";

// context

import { CurrentSongContext } from "../../context/CurrentSong";

const PlayButton = ({ topSong }) => {
  const { songState, playState } = React.useContext(CurrentSongContext);

  const [play, setPlay] = playState;

  const [song, setSong] = songState;

  return (
    <div
      onClick={() => {
        if (song !== topSong) {
          setSong(topSong);
          setPlay(true);
          return;
        }
        console.log(song);
        setPlay(!play);
      }}
      className="playButton"
    >
      <motion.div
        variants={animation}
        initial="initial"
        animate="animate"
        className="buttonContainer"
      >
        <div className="play">
          {play && song.id == topSong.id
            ? play
              ? resume()
              : pause()
            : pause()}
        </div>
      </motion.div>
    </div>
  );
};

// play ? resume() : pause()

const animation = {
  initial: {
    opacity: 0,
    y: "30%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: "-100%",
  },
};

export default PlayButton;
