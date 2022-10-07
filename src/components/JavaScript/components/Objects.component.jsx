import { FooterJS } from "../../index";
import { pageStyles } from "../Data/styles";

const Objects = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>JavaScript Objects</span>
      </div>
      <div className={pageStyles.homeContent}>
        <p>Here we explain more about Javascript Objects.</p>
        <div className={pageStyles.sectionHeader}>Arrow Functions</div>
        <p>
          An arrow function is a shorter form of function expression that is
          more compact and easier to write. However Arrow functions DO NOT get a
          'this' keyword.
        </p>

        <FooterJS complete={false} />
      </div>
    </div>
  );
};

export default Objects;
