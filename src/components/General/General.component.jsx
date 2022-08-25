import "./general.styles.css";
import { default as Home } from "./GeneralHome.component";
import { default as Nav } from "../Nav.component";
import { Route, Routes } from "react-router-dom";
import { Vim, VSCode, Emacs, Yarn, Planning } from "./components";

const names = ["vim", "vscode", "emacs", "yarn", "planning"];
const colors = ["color1", "color2", "color3", "color4"];
const elements = [<Vim />, <VSCode />, <Emacs />, <Yarn />, <Planning />];

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
