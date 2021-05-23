// initial state

const initialState = {
  refreshToken: "",
  tokenAccess: "",
  tokenExpire: "",
};

const userCredentials = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_CREDENTIALS":
      return { ...action.payload };
    default:
      return state;
  }
};

export default userCredentials;
