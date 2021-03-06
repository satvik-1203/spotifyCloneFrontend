import React, { useEffect } from "react";
import NavBar from "../NavBar";
import { loginWithToken, userInfoUrl } from "../../BaseUrl";
import Cookies from "js-cookie";
import axios from "axios";
import { useDispatch } from "react-redux";
import userInfo from "../../redux/action/userInfo";
import userCredentials from "../../redux/action/userCredentials";

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

  const addToDate = (date, minutes) => {
    return new Date(date.getTime() + minutes * 60000);
  };

  const validateAuth = () => {
    const data = getCookie("name");
    if (data) {
      axios.get(userInfoUrl(data)).then(({ data }) => {
        dispatch(userInfo(data));
      });

      axios.get(loginWithToken(data)).then(({ data }) => {
        dispatch(userCredentials({ tokenAccess: data.accessToken }));
        const cookie = `name=${data.accessToken}; expires=${addToDate(
          new Date(),
          60
        ).toUTCString()};`;

        document.cookie = cookie;
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
