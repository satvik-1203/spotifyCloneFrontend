import React, { useState } from "react";
import { CurrentSongContext } from "./CurrentSong";

export const SongQueueContext = React.createContext();

const SongQ = ({ children }) => {
  const [songQueue, setSongQueue] = useState([]);
  const { songState } = React.useContext(CurrentSongContext);

  const [currentSong] = songState;

  React.useEffect(() => {
    setSongQueue([currentSong, ...songQueue]);
  }, [currentSong, songQueue]);

  return (
    <SongQueueContext.Provider value={{ songQueue: [songQueue, setSongQueue] }}>
      {children}
    </SongQueueContext.Provider>
  );
};

export default SongQ;
