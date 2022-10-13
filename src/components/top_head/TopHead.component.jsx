import "./topHead.styles.css";
import { NavLink, useLocation } from "react-router-dom";

const TopHead = () => {
  return (
    <div className="top-head">
      <NavLink to="/">
        <h1>Study Website Fourteen</h1>
      </NavLink>
      <ul className="main-links">
        <NavLink to="general">
          <li>General</li>
        </NavLink>
        <NavLink to="javascript">
          <li>JavaScript</li>
        </NavLink>
        <NavLink to="reactjs">
          <li>React</li>
        </NavLink>
        <NavLink to="css">
          <li>CSS</li>
        </NavLink>
        <NavLink to="nodejs">
          <li>NodeJS</li>
        </NavLink>
        <NavLink to="testing">
          <li>Testing</li>
        </NavLink>
        <NavLink to="links">
          <li>Links</li>
        </NavLink>
      </ul>
    </div>
  );
};
3;

console.log();

export default TopHead;
