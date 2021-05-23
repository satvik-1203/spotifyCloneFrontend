const useCredentials = (data) => (dispatch) => {
  dispatch({
    type: "FETCH_USER_CREDENTIALS",
    payload: data,
  });
};

export default useCredentials;
