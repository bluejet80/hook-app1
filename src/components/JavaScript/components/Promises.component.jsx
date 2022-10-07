import { FooterJS } from "../../index";
import { pageStyles } from "../Data/styles";

const Promises = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>JS Promises</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Asynchronous JS</div>
        <p>We will now talk some about asynchronous JavaScript.</p>
        <FooterJS complete={false} />
      </div>
    </div>
  );
};

export default Promises;
