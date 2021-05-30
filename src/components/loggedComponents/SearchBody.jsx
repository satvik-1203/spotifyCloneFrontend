import React from "react";
import TopSong from "./TopSong";

const SearchBody = (props) => {
  const { tracks } = props;
  return (
    <div>
      <TopSong topSong={tracks[0]} />
    </div>
  );
};

export default SearchBody;
