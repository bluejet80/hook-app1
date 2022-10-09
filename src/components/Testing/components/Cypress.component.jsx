import { Footer } from "../../index";
import { pageStyles } from "../data/styles";

const Cypress = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Testing in Cypress</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>First Thing</div>
        <p>Stuff</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Cypress;
