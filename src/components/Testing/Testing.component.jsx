import "./testing.styles.css";
import { TestingNav, TestingHome } from "./index";
import { Jest } from "./components";
import { Route, Routes } from "react-router-dom";

const Testing = () => {
  return (
    <div className="main">
      <TestingNav />
      <Routes>
        <Route path="/" element={<TestingHome />} />
        <Route path="jest" element={<Jest />} />
      </Routes>
    </div>
  );
};

export default Testing;
