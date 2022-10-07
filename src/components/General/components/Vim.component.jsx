import { Footer } from "../../index";
import { DataTable } from "../../index";
import { sandrepVim } from "../data/tableData";
import { pageStyles } from "../data/styles";

const Vim = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className="title">Vim Information</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Search and replace</div>
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
