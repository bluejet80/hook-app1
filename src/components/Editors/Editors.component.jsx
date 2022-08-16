import "./editors.styles.css";
import { EditorsNav, EditorsHome } from "./index.js";

const Editors = () => {
  return (
    <div className="main">
      <EditorsNav />
      <EditorsHome />
    </div>
  );
};

export default Editors;
