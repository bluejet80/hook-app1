import "./app.styles.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import {
  JavaScript,
  CSS,
  NodeJS,
  Editors,
  ReactJS,
  TopHead,
  Home,
  Testing,
} from "./components";

const App = () => {
  return (
    <Router>
      <div className="App">
        <TopHead />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="javascript/*" element={<JavaScript />} />
          <Route path="nodejs/*" element={<NodeJS />} />
          <Route path="reactjs/*" element={<ReactJS />} />
          <Route path="css/*" element={<CSS />} />
          <Route path="editors/*" element={<Editors />} />
          <Route path="testing/*" element={<Testing />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
