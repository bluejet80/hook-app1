import "./reactjs.styles.css";
import { ReactJSNav, ReactJSHome } from "./index.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const ReactJS = () => {
  return (
    <div className="main">
      <ReactJSNav />
      <ReactJSHome />
    </div>
  );
};

export default ReactJS;
