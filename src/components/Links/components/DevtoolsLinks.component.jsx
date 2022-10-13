import { Footer } from "../../index";
import { pageStyles } from "../data/styles";
import { DataTableLink2 } from "../../tables/DataTable.componenet";
import { devToolsList } from "../data/links";

const DevtoolsLinks = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Dev Tools links</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Dev Tools Links</div>
        <p>Here are links to Topics on Developer Tools.</p>
        <DataTableLink2 list={devToolsList} />

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default DevtoolsLinks;
