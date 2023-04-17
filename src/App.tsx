import React, { useEffect, useState } from "react";
import Navbar from "./Components/UI/Navbvar/navbar";
import Profile from "./Pages/Profile/profile";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./Context/context";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("authProfile")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);
  return (
    <>
      <AuthContext.Provider
        value={{ isAuth, setIsAuth, isLoading, setIsLoading }}
      >
        <BrowserRouter>
          <Navbar />
          <Profile />
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
};

export default App;
