import React from "react";
import TopSong from "./TopSong";
import OtherSongs from "./OtherSongs";

const SearchBody = (props) => {
  const { tracks } = props;

  return (
    <div className="searchBody">
      <TopSong topSong={tracks[0]} />
      <OtherSongs songs={[].concat.apply([], tracks).splice(16, 4)} />
    </div>
  );
};

export default SearchBody;
