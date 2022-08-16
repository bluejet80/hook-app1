import "./topHead.styles.css";
import { Link } from "react-router-dom";

const TopHead = () => {
  return (
    <div className="top-head">
      <Link to="/">
        <h1>Study Website Fourteen</h1>
      </Link>
      <ul className="main-links">
        <Link to="javascript">
          <li>JavaScript</li>
        </Link>
        <Link to="css">
          <li>CSS</li>
        </Link>
        <Link to="reactjs">
          <li>React</li>
        </Link>
        <Link to="editors">
          <li>Editors</li>
        </Link>
        <Link to="nodejs">
          <li>NodeJS</li>
        </Link>
        <Link to="testing">
          <li>Testing</li>
        </Link>
      </ul>
    </div>
  );
};

export default TopHead;
