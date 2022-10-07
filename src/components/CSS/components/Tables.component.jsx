import { CodeCSSBlock, CodeJSXBlock, Footer } from "../../index";
import { TableCSS, TableJsx } from "../data/tablecode";
import { pageStyles } from "../data/styles";

const Tables = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Styling Tables</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Example CSS</div>
        <CodeCSSBlock code={TableCSS} />
        <p>Here is the JSX</p>
        <CodeJSXBlock code={TableJsx} />
        <p>Paragraph</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Tables;
