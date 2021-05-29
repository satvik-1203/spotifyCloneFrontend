const userInfo = (data) => (dispatch) => {
  dispatch({
    type: "FETCH_USER_INFO",
    payload: data,
  });
};

export default userInfo;
