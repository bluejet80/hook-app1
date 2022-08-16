import "./testing.styles.css";
import { TestingNav, TestingHome } from "./index";
import { Route, Routes } from "react-router-dom";

const Testing = () => {
  return (
    <div className="main">
      <TestingNav />
      <TestingHome />
    </div>
  );
};

export default Testing;
