import "./testing.styles.css";
import { default as Nav } from "../Nav.component";
import { default as Home } from "./TestingHome.component";
import {
  Jest,
  Cypress,
  Jasmine,
  Puppeteer,
  ReactTesting,
  TDD,
} from "./components";
import { Route, Routes } from "react-router-dom";

const names = ["jest", "tdd", "cypress", "jasmine", "reacttest", "puppeteer"];
const colors = ["color11", "color8", "color3", "color16"];
const elements = [
  <Jest />,
  <TDD />,
  <Cypress />,
  <Jasmine />,
  <ReactTesting />,
  <Puppeteer />,
];

const Testing = () => {
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

export default Testing;
