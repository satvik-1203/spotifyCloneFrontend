const userInfoData = (state = "", action) => {
  switch (action.type) {
    case "FETCH_USER_INFO":
      return action.payload;
    default:
      return state;
  }
};

export default userInfoData;
