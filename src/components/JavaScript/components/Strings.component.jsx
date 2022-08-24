import { DataTable, CodeBlock, Footer } from "../../index";
import { code1 } from "../Data/FundCode";
const Strings = () => {
  return (
    <div className="home-section">
      <div className="header color2">
        <span className="title">JavaScript Strings</span>
      </div>
      <div className="home-content color1">
        <div className="section-header">Working with Strings</div>
        <p>
          An arrow function is a shorter form of function expression that is
          more compact and easier to write. However Arrow functions DO NOT get a
          'this' keyword.
        </p>
        <CodeBlock code={code1} />
        <p>You can also have function expressions as elements of an array</p>
        <Footer complete={true} />
      </div>
    </div>
  );
};

export default Strings;
