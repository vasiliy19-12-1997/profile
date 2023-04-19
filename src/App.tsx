import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter/appRouter";
import { AuthContext } from "./Context/context";
import Navbar from "./Components/UI/Navbvar/navbar";

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
        <div className="containter">
          <BrowserRouter>
            <Navbar />
            <AppRouter />
          </BrowserRouter>
        </div>
      </AuthContext.Provider>
    </>
  );
};

export default App;
