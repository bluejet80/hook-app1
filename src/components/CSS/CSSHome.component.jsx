import { pageStyles } from "./data/styles";

const CSSHome = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>CSS Studies</span>
      </div>
      <div className={pageStyles.homeContent}>
        <p>This is where all the information on CSS will go.</p>
        <div className={pageStyles.sectionHeader}>Heading 1</div>
      </div>
    </div>
  );
};

export default CSSHome;
