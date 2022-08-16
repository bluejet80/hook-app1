import React from "react";
import { createRoot } from "react-dom/client";

import App2 from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App2 tab="home" />);
