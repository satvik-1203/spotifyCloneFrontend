const navBar = () => {
  return [
    {
      id: 1,
      name: "Sign up",
      path: "/signup",
    },
    {
      id: 2,
      name: "Log in",
      path: "https://accounts.spotify.com/authorize?client_id=0e098488165c416b8f3451c972feee06&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state",
    },
  ];
};

export default navBar;
