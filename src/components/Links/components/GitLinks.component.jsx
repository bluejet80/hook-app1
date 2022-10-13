import { Footer } from "../../index";
import { pageStyles } from "../data/styles";
import { DataTableLink2 } from "../../tables/DataTable.componenet";
import { gitList } from "../data/links";

const GitLinks = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Git links</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Git Links</div>
        <p>Here are links to Topics on Git/Github.</p>
        <DataTableLink2 list={gitList} />

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default GitLinks;
