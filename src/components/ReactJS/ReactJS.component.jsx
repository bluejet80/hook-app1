import "./reactjs.styles.css";
import { default as Nav } from "../Nav.component";
import { default as Home } from "./ReactJSHome.component";
import { Routes, Route } from "react-router-dom";
import {
  Redux,
  ClassComp,
  Hooks,
  JSX,
  ReactRouter,
  Libraries,
  Docs,
  ReactWeb,
  FetchAPI,
} from "./components";

const names = [
  "redux",
  "classcomp",
  "hooks",
  "jsx",
  "fetchapi",
  "reactrouter",
  "libraries",
  "docs",
  "reactweb",
];
const colors = ["color13", "color14", "color15", "color16"];
const elements = [
  <Redux />,
  <ClassComp />,
  <Hooks />,
  <JSX />,
  <FetchAPI />,
  <ReactRouter />,
  <Libraries />,
  <Docs />,
  <ReactWeb />,
];

const ReactJS = () => {
  return (
    <div className="main">
      <Nav links={names} colors={colors} />
      <Routes>
        <Route path="/" element={<Home />} />
        {names.map((item, index) => {
          return <Route path={item} element={elements[index]} key={index} />;
        })}
      </Routes>
    </div>
  );
};

export default ReactJS;
