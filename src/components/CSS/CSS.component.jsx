import "./css.styles.css";
import { default as Home } from "./CSSHome.component";
import { default as Nav } from "../Nav.component";
import { Route, Routes } from "react-router-dom";
import {
  Animation,
  BootStrap,
  FlexGrid,
  Fundamentals,
  Gradients,
  Resources,
  Responsive,
  Sass,
  Tailwind,
  Tables,
} from "./components";

const names = [
  "bootstrap",
  "tailwind",
  "sass",
  "fundamentals",
  "responsive",
  "animation",
  "gradients",
  "resources",
  "flexgrid",
  "tables",
];
const links = [
  <BootStrap />,
  <Tailwind />,
  <Sass />,
  <Fundamentals />,
  <Responsive />,
  <Animation />,
  <Gradients />,
  <Resources />,
  <FlexGrid />,
  <Tables />,
];
const colors = ["color9", "color10", "color11", "color12"];

const CSS = () => {
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

export default CSS;
