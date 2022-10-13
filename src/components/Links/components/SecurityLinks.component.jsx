import { Footer } from "../../index";
import { pageStyles } from "../data/styles";
import { DataTableLink2 } from "../../tables/DataTable.componenet";
import { securityList } from "../data/links";

const SecurityLinks = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Security links</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Security Links</div>
        <p>Here are links to Topics on Security.</p>
        <DataTableLink2 list={securityList} />

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default SecurityLinks;
