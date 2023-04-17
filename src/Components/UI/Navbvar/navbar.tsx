import { FC, useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import MyButton from "../MyButton/myButton";
import { AuthContext } from "../../../Context/context";
import { IAuth } from "../../../Types/types";

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setIsAuth } = useContext(AuthContext) as IAuth;
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  const logOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsAuth(false);
    localStorage.removeItem("authProfile");
  };
  return (
    <>
      <div className="burger-menu-container">
        <div
          className={`burger-menu ${menuOpen ? "open" : ""}`}
          onClick={handleMenuClick}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className={`menu-items ${menuOpen ? "open" : ""}`}>
          <nav>
            <ul>
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Projects</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
              <li>
                <MyButton onClick={logOut}>log out</MyButton>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
