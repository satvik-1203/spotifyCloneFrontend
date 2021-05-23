import { useEffect } from "react";
import { LoginUrl } from "../BaseUrl";
import axios from "axios";
import _ from "lodash";

//redux

import { useDispatch } from "react-redux";
import userCredentials from "../redux/action/userCredentials";

const code = new URLSearchParams(window.location.search).get("code");
// we need to call our url, not the call back, and we made no callback url so we can take that out

const Login = () => {
  const dispatch = useDispatch();

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
        console.log(data);
      })
      .catch(() => {
        window.location = "/";
      });
  }, [code]);
};

export default Login;
