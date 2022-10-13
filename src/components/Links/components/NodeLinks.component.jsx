import { Footer } from "../../index";
import { pageStyles } from "../data/styles";
import { DataTableLink2 } from "../../tables/DataTable.componenet";
import { nodeList } from "../data/links";

const NodeLinks = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>NodeJS links</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>NodeJS Links</div>
        <p>Here are links to Topics on NodeJS.</p>
        <DataTableLink2 list={nodeList} />

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default NodeLinks;
