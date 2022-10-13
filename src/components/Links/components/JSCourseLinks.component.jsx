import { Footer } from "../../index";
import { pageStyles } from "../data/styles";
import { DataTableLink2 } from "../../tables/DataTable.componenet";
import { javascriptCourseList1 } from "../data/links";

const JSCourseLinks = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>javaScript Course links</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Javascript Course Links</div>
        <p>Here are links to Courses on Javascript.</p>
        <DataTableLink2 list={javascriptCourseList1} />

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default JSCourseLinks;
