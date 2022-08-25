import { DataTable, CodeBlock, Footer } from "../../index";
import { code1 } from "../Data/FundCode";
const Test = () => {
  return (
    <div className="home-section">
      <div className="header color2">
        <span className="title">Test</span>
      </div>
      <div className="home-content color1">
        <div className="section-header">Heading 1</div>
        <p>Paragraph1</p>
        <CodeBlock code={code1} />
        <p>You can also have function expressions as elements of an array</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Test;
