import { Footer } from "../../index";
import { pageStyles } from "../data/styles";
import { DataTableLink2 } from "../../tables/DataTable.componenet";
import { interviewList } from "../data/links";

const InterviewLinks = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Interview links</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Interview Links</div>
        <p>Here are links to Topics on Technical Interviews.</p>
        <DataTableLink2 list={interviewList} />

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default InterviewLinks;
