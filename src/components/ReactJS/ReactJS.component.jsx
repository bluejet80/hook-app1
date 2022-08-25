import "./reactjs.styles.css";
import { default as Nav } from "../Nav.component";
import { default as Home } from "./ReactJSHome.component";
import { Routes, Route } from "react-router-dom";

const names = [
  "redux",
  "classcomp",
  "hooks",
  "jsx",
  "router",
  "libraries",
  "docs",
  "reactweb",
];
const colors = ["color13", "color14", "color15", "color16"];
const elements = [];

const ReactJS = () => {
  return (
    <div className="main">
      <Nav links={names} colrs={colors} />
      <Routes>
        <Route path="/" element={<Home />} />
        {names.map((item, index) => {
          return <Route path={item} element={elements[index]} />;
        })}
      </Routes>
    </div>
  );
};

export default ReactJS;
