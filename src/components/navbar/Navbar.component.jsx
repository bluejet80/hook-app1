import { useState } from "react";
import { RiMenu3Line, RiCloseCircleLine } from "react-icons/ri";
import "./navbar.styles.css";
import logo from "../../images/logo2.png";
import cross from "../../images/cross1.png";

const NavBar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { menuList } = props;
  console.log(menuList);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links_container">
          {menuList.map((item) => {
            const [first, last] = item;
            return (
              <>
                <p>
                  <a href={first}>{last}</a>
                </p>
                <img className="link-image" src={cross} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
