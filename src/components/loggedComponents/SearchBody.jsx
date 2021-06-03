import React from "react";
import TopSong from "./TopSong";
import OtherSongs from "./OtherSongs";

const SearchBody = (props) => {
  const { tracks } = props;

  return (
    <div className="searchBody">
      <div className="songContainerFlex">
        <TopSong topSong={tracks[0]} />
        <OtherSongs songs={tracks.slice(0, Math.min(4, tracks.length))} />
      </div>
    </div>
  );
};

export default SearchBody;
