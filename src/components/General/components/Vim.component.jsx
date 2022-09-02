import { Footer } from "../../index";
import { DataTable } from "../../index";
import { sandrepVim } from "../data/tableData";

const Vim = () => {
  return (
    <div className="home-section color11">
      <div className="header color5">
        <span className="title">Vim Information</span>
      </div>
      <div className="home-content white-text">
        <div className="section-header">Search and replace</div>
        <p>
          Here are a few examples of the search and replace feature of Vim. The
          "_" represents a space.
        </p>
        <DataTable list={sandrepVim} />

        <p>You can also have function expressions as elements of an array</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Vim;
