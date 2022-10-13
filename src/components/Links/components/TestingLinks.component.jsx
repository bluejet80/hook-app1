import { Footer } from "../../index";
import { pageStyles } from "../data/styles";
import { DataTableLink2 } from "../../tables/DataTable.componenet";
import { testingList } from "../data/links";

const TestingLinks = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Testing links</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Testing Links</div>
        <p>Here are links to Topics on Testing.</p>
        <DataTableLink2 list={testingList} />

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default TestingLinks;
