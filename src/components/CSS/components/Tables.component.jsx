import { CodeCSSBlock, Footer } from "../../index";
import { TableCSS } from "../data/tablecode";

const Tables = () => {
  return (
    <div className="home-section color9">
      <div className="header color11">
        <span className="title">Styling Tables</span>
      </div>
      <div className="home-content">
        <div className="section-header">Example CSS</div>
        <CodeCSSBlock code={TableCSS} />
        <p>Paragraph</p>
        <p>You can also have function expressions as elements of an array</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Tables;
