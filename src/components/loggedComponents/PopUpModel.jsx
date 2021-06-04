import React from "react";

const PopUpModel = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <div className="popModel">
          <ul>
            <li>Account</li>
            <li>Profile</li>
            <li>Log out</li>
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default PopUpModel;
