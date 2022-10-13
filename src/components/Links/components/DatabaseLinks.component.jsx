import { Footer } from "../../index";
import { pageStyles } from "../data/styles";
import { DataTableLink2 } from "../../tables/DataTable.componenet";
import { databaseList } from "../data/links";

const DatabaseLinks = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Database links</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Database Links</div>
        <p>Here are links to Topics on Databases.</p>
        <DataTableLink2 list={databaseList} />

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default DatabaseLinks;
