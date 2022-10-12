import { CodeJSBlock, FooterJS } from "../../index";
import { pageStyles } from "../Data/styles";
import { linearSearch, rndArrayCode, binarySearch } from "../Data/DataCode";

const Data = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Abstract Data Types</span>
      </div>
      <div className={pageStyles.homeContent}>
        <p>Here we take a look at Abstract Data Types</p>
        <div className={pageStyles.sectionHeader}>Stacks</div>
        <p>
          A stack is useful for holding data temporarily as in during recusion
          or with other algorithms. Stacks do not normally come already
          available in the language. You must create them in a class.
        </p>
        <div className={pageStyles.sectionHeader}>Create an Array</div>
        <CodeJSBlock code={rndArrayCode} />
        <div className={pageStyles.sectionHeader}>Search Algorithms</div>
        <CodeJSBlock code={linearSearch} />
        <CodeJSBlock code={binarySearch} />

        <FooterJS complete={false} />
      </div>
    </div>
  );
};

export default Data;
