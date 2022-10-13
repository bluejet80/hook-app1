import { Footer } from "../../index";
import { pageStyles } from "../data/styles";
import { DataTableLink2 } from "../../tables/DataTable.componenet";
import { javascriptList } from "../data/links";

const JSLinks = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>JavaScript links</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>JavaScript Links</div>
        <p>Here are links to Topics on Javascript.</p>
        <DataTableLink2 list={javascriptList} />

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default JSLinks;
