import { DataTable, CodeBlock, Footer } from "../../index";
import {} from "../Data";
const Animation = () => {
  return (
    <div className="home-section">
      <div className="header color2">
        <span className="title">CSS Animation Stuff</span>
      </div>
      <div className="home-content color1">
        <div className="section-header">Types of Animations</div>
        <p>Paragraph1</p>
        <CodeBlock code={code1} />
        <p>You can also have function expressions as elements of an array</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Animation;
