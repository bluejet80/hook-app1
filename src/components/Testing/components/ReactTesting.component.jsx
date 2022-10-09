import { Footer } from "../../index";
import { pageStyles } from "../data/styles";

const ReactTesting = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>
          Testing With React Testing Libraries
        </span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>First thing</div>
        <p>Stuff</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default ReactTesting;
