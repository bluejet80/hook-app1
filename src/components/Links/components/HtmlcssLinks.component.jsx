import { Footer } from "../../index";
import { pageStyles } from "../data/styles";
import { DataTableLink2 } from "../../tables/DataTable.componenet";
import { htmlCSSList } from "../data/links";

const HtmlcssLinks = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>HTML/CSS links</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>HTML/CSS Links</div>
        <p>Here are links to Topics on HTML/CSS.</p>
        <DataTableLink2 list={htmlCSSList} />

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default HtmlcssLinks;
