import React, { useState, createContext, useEffect, useRef } from "react";

export const CurrentSongContext = createContext();

const CurrentSong = ({ children }) => {
  const [song, setSong] = useState();
  const [play, setPlay] = useState();

  const contextValues = {
    songState: [song, setSong],
    playState: [play, setPlay],
  };

  return (
    <CurrentSongContext.Provider value={contextValues}>
      {children}
    </CurrentSongContext.Provider>
  );
};

export default CurrentSong;
