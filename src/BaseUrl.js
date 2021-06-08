const BASE_URL = "http://localhost:3001/spotify/";

export const SearchURL = BASE_URL + "search";
export const LoginUrl = BASE_URL + "login";
export const userInfoUrl = (accessToken) =>
  BASE_URL + "userInfo/" + accessToken;

export const loginWithToken = (token) => `${BASE_URL}loginToken/${token}`;
