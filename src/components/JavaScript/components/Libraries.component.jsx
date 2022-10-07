import { FooterJS } from "../../index";
import { pageStyles } from "../Data/styles";

const Libraries = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>JavaScript Libraries</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Heading 1</div>
        <p>Paragraph1</p>

        <p>You can also have function expressions as elements of an array</p>
        <FooterJS complete={false} />
      </div>
    </div>
  );
};

export default Libraries;
