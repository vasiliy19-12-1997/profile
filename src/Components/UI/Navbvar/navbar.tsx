import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/context";
import { IAuth } from "../../../Types/types";
import MyButton from "../MyButton/myButton";
import "./navbar.scss";

const Navbar = () => {
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
                <Link to={"/profile"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/projects"}>Projects</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
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
