import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import ArrowButtons from "./ArrorButtons";
import PopUpModel from "./PopUpModel";

import navigation from "../../misc/navigation";

// react-router -dom

import { useLocation } from "react-router-dom";

const NavBar = () => {
  const userData = useSelector((state) => state.userInfoData);
  const [buttonClick, setButtonClick] = useState(false);

  const location = useLocation();

  const navComponents = navigation().find(
    (element) => element.path === location.pathname
  );

  return (
    <>
      <nav className="logged">
        <div className="buttons">
          <ArrowButtons />
          <div className="navComponents">{navComponents.components}</div>
        </div>
        <div id="logo" onClick={() => setButtonClick(!buttonClick)}>
          <div className="imageContainer">
            <img
              src={userData.images[0] ? userData.images[0].url : ""}
              alt=""
            />
          </div>
          <div className="name">{userData.display_name}</div>
          <div className="caret">
            <FontAwesomeIcon
              icon={buttonClick ? faCaretUp : faCaretDown}
              size="1x"
            />
          </div>
        </div>
      </nav>
      <PopUpModel isOpen={buttonClick} />
    </>
  );
};

export default NavBar;

//#201160
