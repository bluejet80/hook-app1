import "./javascript.styles.css";
import { useState, useEffect } from "react";
import { JavaScriptNav, JavaScriptHome } from "./index";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  Fundamentals,
  Strings,
  Objects,
  Boolean,
  Functions,
  Arrays,
} from "./components";

const JavaScript = () => {
  return (
    <div className="main">
      <JavaScriptNav />
      <Routes>
        <Route path="/" element={<JavaScriptHome />} />
        <Route path="fundamentals" element={<Fundamentals />} />
        <Route path="boolean" element={<Boolean />} />
        <Route path="strings" element={<Strings />} />
        <Route path="objects" element={<Objects />} />
        <Route path="arrays" element={<Arrays />} />
        <Route path="functions" element={<Functions />} />
      </Routes>
    </div>
  );
};

export default JavaScript;
