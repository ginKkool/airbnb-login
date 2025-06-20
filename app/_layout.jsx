import { Stack, Router } from "expo-router";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const GlobalLayout = () => {
  const [userID, setUserID] = useState(null);
  const [userToken, setUserToken] = useState(null);

  const logout = () => {
    console.log("logout");
    setUserID("");
    setUserToken("");
  };

  const login = ({ id, token }) => {
    console.log("login");
    console.log("token", token);
    console.log("id", id);

    setUserID(id);
    setUserToken(token);
  };

  useEffect(() => {
    if (userToken && userID) {
      router.replace("/home");
    } else if (userID === "" && userToken === "") {
      router.replace("login");
    }
  }, [userID, userToken]);

  return (
    <AuthContext.Provider value={{ userID, userToken, login, logout }}>
      <Stack />
    </AuthContext.Provider>
  );
};

export default GlobalLayout;
