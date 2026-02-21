import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

function AuthButton() {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    console.log(isLoggedIn)
  return (
    <button onClick={() => setIsLoggedIn(true)}>
      Войти
    </button>
  );
}

export default AuthButton