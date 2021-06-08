import React, { useEffect } from "react";
import NavBar from "../NavBar";
import { loginWithToken, userInfoUrl } from "../../BaseUrl";
import Cookies from "js-cookie";
import axios from "axios";
import { useDispatch } from "react-redux";
import userInfo from "../../redux/action/userInfo";

const HomeNotLogged = () => {
  const dispatch = useDispatch();

  const getCookie = (name) => {
    const validCookie = Cookies.get(name);
    if (validCookie) {
      return validCookie;
    } else {
      return null;
    }
  };

  const validateAuth = () => {
    if (getCookie("name")) {
      axios.get(userInfoUrl).then(({ data }) => {
        dispatch(userInfo(data));
      });
    }
  };

  useEffect(() => {
    validateAuth();
  }, []);

  return (
    <>
      <NavBar />
      <div className="homePage">
        <div className="hero">
          <div className="heroText">
            <h1>
              Listening is <br /> everything
            </h1>
            <p>Millions of songs and podcasts. No credit card needed.</p>
            <button>GET SPOTIFY FREE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNotLogged;
