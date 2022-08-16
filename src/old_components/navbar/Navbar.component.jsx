import { useState } from "react";
import { RiMenu3Line, RiCloseCircleLine } from "react-icons/ri";
import "./navbar.styles.css";
import index from "../../images/index";

const Menu = () => {
  const linkList = [
    ["#home", "Home"],
    ["#articles", "Articles"],
    ["#journals", "Journals"],
    ["#books", "Books"],
    ["#contact", "Contact"],
  ];

  return (
    <>
      {linkList.map((item, index) => {
        const [first, last] = item;
        return (
          <div key={index}>
            <p>
              <a href={first}>{last}</a>
            </p>
          </div>
        );
      })}
    </>
  );
};

const NavBar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={index.logo2} alt="logo" />
      </div>
      <div className="navbar-main">
        <div className="navbar-main_title"></div>
        <div className="navbar-main_links">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
