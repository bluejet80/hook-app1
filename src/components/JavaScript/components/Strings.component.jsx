import { FooterJS } from "../../index";
import { pageStyles } from "../Data/styles";

const Strings = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>JavaScript Strings</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Working with Strings</div>
        <p>
          An arrow function is a shorter form of function expression that is
          more compact and easier to write. However Arrow functions DO NOT get a
          'this' keyword.
        </p>

        <p>You can also have function expressions as elements of an array</p>
        <FooterJS complete={true} />
      </div>
    </div>
  );
};

export default Strings;
