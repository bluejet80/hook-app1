import { Footer } from "../../index";
import { pageStyles } from "../data/styles";
import { DataTableLink2 } from "../../tables/DataTable.componenet";
import { functionalList } from "../data/links";

const FunctionalLinks = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Functional links</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>
          Functional Programming Links
        </div>
        <p>Here are links to Topics on Functional Programming.</p>
        <DataTableLink2 list={functionalList} />

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default FunctionalLinks;
