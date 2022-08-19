import "./general.styles.css";
import { GeneralNav, GeneralHome } from "./index.js";

const General = () => {
  return (
    <div className="main">
      <GeneralNav />
      <GeneralHome />
    </div>
  );
};

export default General;
