import "./nodejs.styles.css";
import { NodeJSNav, NodeJSHome } from "./index";
import {
  Modules,
  Express,
  Postman,
  RestAPI,
  MongoDB,
  Fetch,
  Libraries,
  Docs,
  Resources,
  Middleware,
} from "./components";

const names = [
  "modules",
  "express",
  "mongodb",
  "postman",
  "restapi",
  "middleware",
  "fetch",
  "resources",
  "libraries",
  "docs",
];
const links = [<Modules />];
const colors = ["color5", "color6", "color7", "color8"];

const NodeJS = () => {
  return (
    <div className="main">
      <NodeJSNav />
      <NodeJSHome />
    </div>
  );
};

export default NodeJS;
