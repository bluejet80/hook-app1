import "./general.styles.css";
import { default as Home } from "./GeneralHome.component";
import { default as Nav } from "../Nav.component";
import { Route, Routes } from "react-router-dom";
import {
  Vim,
  VSCode,
  Emacs,
  Yarn,
  Planning,
  Lisp,
  Organize,
  Git,
  Npm,
  Freelance,
  Study,
} from "./components";

const names = [
  "vim",
  "vscode",
  "emacs",
  "yarn",
  "npm",
  "planning",
  "lisp",
  "organize",
  "git",
  "freelance",
  "study",
];
const colors = ["color5", "color11", "color8", "color16"];
const elements = [
  <Vim />,
  <VSCode />,
  <Emacs />,
  <Yarn />,
  <Npm />,
  <Planning />,
  <Lisp />,
  <Organize />,
  <Git />,
  <Freelance />,
  <Study />,
];

const General = () => {
  return (
    <div className="main">
      <Nav links={names} colors={colors} />
      <Routes>
        <Route path="/" element={<Home />} />
        {names.map((item, index) => {
          return <Route path={item} element={elements[index]} key={index} />;
        })}
        ;
      </Routes>
    </div>
  );
};

export default General;
