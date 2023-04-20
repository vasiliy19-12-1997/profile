import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter/appRouter";

const App = () => {
  return (
    <>
      <div className="containter">
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
