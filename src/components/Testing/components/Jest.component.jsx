import { Footer } from "../../index";
import { pageStyles } from "../data/styles";

const Jest = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Testing With Jest</span>
      </div>
      <div className={pageStyles.homeContent}>
        <p>Here is information on the testing framework Jest.</p>
        <div className={pageStyles.sectionHeader}>Arrow Functions</div>
        <p>
          An arrow function is a shorter form of function expression that is
          more compact and easier to write. However Arrow functions DO NOT get a
          'this' keyword.
        </p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Jest;
