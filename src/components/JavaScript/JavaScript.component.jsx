import "./javascript.styles.css";
import { JavaScriptNav, JavaScriptHome } from "./index";
import { Route, Routes } from "react-router-dom";
import { Fundamentals, Environment, Strings, Objects } from "./components";

const JavaScript = () => {
  return (
    <div className="main">
      <JavaScriptNav />
      <Routes>
        <Route path="/" element={<JavaScriptHome />} />
        <Route path="fundamentals" element={<Fundamentals />} />
        <Route path="environment" element={<Environment />} />
        <Route path="strings" element={<Strings />} />
        <Route path="objects" element={<Objects />} />
      </Routes>
    </div>
  );
};

export default JavaScript;
