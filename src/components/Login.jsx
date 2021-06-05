import { useEffect } from "react";
import { LoginUrl, userInfoUrl } from "../BaseUrl";
import axios from "axios";
import _ from "lodash";

//redux

import { useDispatch } from "react-redux";
import userCredentials from "../redux/action/userCredentials";
import userInfo from "../redux/action/userInfo";

const code = new URLSearchParams(window.location.search).get("code");

const Login = () => {
  const dispatch = useDispatch();

  const addToDate = (date, minutes) => {
    return new Date(date.getTime() + minutes * 60000);
  };

  useEffect(() => {
    if (!code) return;
    axios
      .post(LoginUrl, { code })
      .then((data) => {
        dispatch(
          userCredentials(
            _.pick(data.data, ["refreshToken", "tokenAccess", "tokenExpire"])
          )
        );
        window.history.pushState({}, "", ["/"]);
        // this get req for getting the data of the user, and will be storing in state

        axios.get(userInfoUrl).then(({ data }) => {
          dispatch(userInfo(data));
        });

        // cookie stuff
        const cookie = `name=${data.data.tokenAccess}; expires=${addToDate(
          new Date(),
          60
        ).toUTCString()};`;

        document.cookie = cookie;
      })
      .catch(() => {
        window.location = "/";
      });
  }, [code]);
};

export default Login;
