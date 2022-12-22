import React from "react";
import { authStateChanged } from "../services/firebase/utilsFirebase.js";
import { useUser } from "./user.js";

const AuthStateChangeProvider = (props) => {
  const user = useUser();
  const { setUser } = user;

  // Check if user is authenticated or not every page load
  React.useEffect(() => {
    authStateChanged(setUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div {...props}></div>;
};

export default AuthStateChangeProvider;
