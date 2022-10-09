import { Footer } from "../../index";
import { pageStyles } from "../data/styles";
const MongoDB = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Mongo Database Information</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Heading 1</div>
        <p>Paragraph1</p>
        <p>You can also have function expressions as elements of an array</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default MongoDB;
