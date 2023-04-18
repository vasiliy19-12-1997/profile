import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter/appRouter";
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
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
};

export default App;
