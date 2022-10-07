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
  Freelance,
  Study,
  RegEx,
} from "./components";

const names = [
  "vim",
  "vscode",
  "emacs",
  "yarn",
  "planning",
  "lisp",
  "organize",
  "git",
  "freelance",
  "study",
  "regex",
];
const colors = [
  "general-color1",
  "general-color2",
  "general-color3",
  "general-color4",
];
const elements = [
  <Vim />,
  <VSCode />,
  <Emacs />,
  <Yarn />,
  <Planning />,
  <Lisp />,
  <Organize />,
  <Git />,
  <Freelance />,
  <Study />,
  <RegEx />,
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
