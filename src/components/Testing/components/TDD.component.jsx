import { Footer } from "../../index";
import { pageStyles } from "../data/styles";

const TDD = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Test Driven Design</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>First thing</div>
        <p>stuff</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default TDD;
