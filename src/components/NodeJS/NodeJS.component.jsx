import "./nodejs.styles.css";
import { default as Nav } from "../Nav.component";
import { default as Home } from "./NodeJSHome.component";
import { Routes, Route } from "react-router-dom";
import {
  Packages,
  Express,
  PostMan,
  RestAPI,
  MongoDB,
  Global,
  Backend,
  Docs,
  Resources,
  Middleware,
  Events,
  Modules,
} from "./components";

const names = [
  "modules",
  "express",
  "global",
  "packages",
  "backend",
  "mongodb",
  "postman",
  "restapi",
  "middleware",
  "events",
  "resources",
  "docs",
];
const links = [
  <Modules />,
  <Express />,
  <Global />,
  <Packages />,
  <Backend />,
  <MongoDB />,
  <PostMan />,
  <RestAPI />,
  <Middleware />,
  <Events />,
  <Resources />,
  <Docs />,
];
const colors = ["node-color1", "node-color2", "node-color3", "node-color4"];

const NodeJS = () => {
  return (
    <div className="main">
      <Nav links={names} colors={colors} />
      <Routes>
        <Route path="/" element={<Home />} />
        {names.map((item, index) => {
          return <Route path={item} element={links[index]} key={index} />;
        })}
      </Routes>
    </div>
  );
};

export default NodeJS;
