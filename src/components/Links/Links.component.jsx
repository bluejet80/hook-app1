import "./links.styles.css";
import { useState, useEffect } from "react";
import { default as Nav } from "../Nav.component";
import { default as Home } from "./LinksHome.component";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  FunctionalLinks,
  DatabaseLinks,
  DevtoolsLinks,
  EmacsLinks,
  GenprogLinks,
  GitLinks,
  HtmlcssLinks,
  InterviewLinks,
  JSCourseLinks,
  JSLInks,
  Nodelinks,
  SecurityLinks,
  TestingLinks,
} from "./components";

// Data Arrays

const names = [
  "functional",
  "database",
  "devtools",
  "emacs",
  "genprog",
  "git",
  "htmlcss",
  "interview",
  "jscourse",
  "javascript",
  "node",
  "security",
  "testing",
];
const colors = ["js-color1", "js-color2", "js-color3", "js-color4"];
const elements = [
  <FunctionalLinks />,
  <DatabaseLinks />,
  <DevtoolsLinks />,
  <EmacsLinks />,
  <GenprogLinks />,
  <GitLinks />,
  <HtmlcssLinks />,
  <InterviewLinks />,
  <JSCourseLinks />,
  <JSLInks />,
  <Nodelinks />,
  <SecurityLinks />,
  <TestingLinks />,
];

const Links = () => {
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

export default Links;
