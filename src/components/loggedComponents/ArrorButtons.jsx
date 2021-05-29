import React from "react";

const ArrowButtons = () => {
  return (
    <div className="arrowButtons">
      <button className="leftArrow">
        <svg
          role="img"
          focusable="false"
          height="24"
          width="24"
          viewBox="0 0 24 24"
          class="Svg-sc-1usfroi-0 hShlue _6fe5d5efc9b4a07d5c424071ac7cdacb-scss"
        >
          <polyline
            points="16 4 7 12 16 20"
            fill="none"
            stroke="white"
          ></polyline>
        </svg>
      </button>
      <button className="rightArrow">
        <svg
          role="img"
          focusable="false"
          height="24"
          width="24"
          viewBox="0 0 24 24"
          class="Svg-sc-1usfroi-0 hShlue _6fe5d5efc9b4a07d5c424071ac7cdacb-scss"
        >
          <polyline
            points="8 4 17 12 8 20"
            fill="none"
            stroke="white"
          ></polyline>
        </svg>
      </button>
    </div>
  );
};

export default ArrowButtons;
