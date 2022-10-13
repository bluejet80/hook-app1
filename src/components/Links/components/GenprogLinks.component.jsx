import { Footer } from "../../index";
import { pageStyles } from "../data/styles";
import { DataTableLink2 } from "../../tables/DataTable.componenet";
import { genProgList } from "../data/links";

const GenprogLinks = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>General Programming links</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>
          general Programming Links
        </div>
        <p>Here are links to Topics on General Programming.</p>
        <DataTableLink2 list={genProgList} />

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default GenprogLinks;
