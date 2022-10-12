import "./javascript.styles.css";
import { useState, useEffect } from "react";
import { default as Nav } from "../Nav.component";
import { default as Home } from "./JavaScriptHome.component";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  Fundamentals,
  Strings,
  Data,
  Boolean,
  Functions,
  Arrays,
  Classes,
  Chaining,
  Closures,
  Destructure,
  ArrayReduce,
  ArrayMap,
  ArrayFilter,
  ArrayForEach,
  Libraries,
  Docs,
  Promises,
} from "./components";

// Data Arrays

const names = [
  "fundamentals",
  "boolean",
  "strings",
  "arrays",
  "functions",
  "data",
  "classes",
  "chaining",
  "closures",
  "destructuring",
  "promises",
  "arrayreduce",
  "arraymap",
  "arrayfilter",
  "arrayforeach",
  "libraries",
  "docs",
];
const colors = ["js-color1", "js-color2", "js-color3", "js-color4"];
const elements = [
  <Fundamentals />,
  <Boolean />,
  <Strings />,
  <Arrays />,
  <Functions />,
  <Data />,
  <Classes />,
  <Chaining />,
  <Closures />,
  <Destructure />,
  <Promises />,
  <ArrayReduce />,
  <ArrayMap />,
  <ArrayFilter />,
  <ArrayForEach />,
  <Libraries />,
  <Docs />,
];

const JavaScript = () => {
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

export default JavaScript;
