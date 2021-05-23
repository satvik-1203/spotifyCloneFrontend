import React, { useEffect } from "react";
import { LoginCallBackUrl } from "../BaseUrl";

const Login = () => {
  const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=0e098488165c416b8f3451c972feee06&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
  const SearchUrl = window.location.search;

  useEffect(() => {
    const newCode = SearchUrl.substring(
      SearchUrl.indexOf("code=") + 5,
      SearchUrl.length
    );

    fetch(LoginCallBackUrl, {
      method: "POST",
      body: {
        code: newCode,
      },
    });
  }, [SearchUrl]);

  return (
    <div>
      <button>
        <a href={AUTH_URL}>Login</a>
      </button>
    </div>
  );
};

export default Login;
