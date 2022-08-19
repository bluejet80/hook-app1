import "./javascript.styles.css";
import { JavaScriptNav, JavaScriptHome } from "./index";
import { Route, Routes } from "react-router-dom";
import { Fundamentals, Strings, Objects, Boolean } from "./components";

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
      </Routes>
    </div>
  );
};

export default JavaScript;
