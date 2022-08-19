import { DataTable, CodeBlock } from "./index";
import { code1 } from "../Data/FundCode";
import { assignList, commonList, compList } from "../Data/FundTables";

const Fundamentals = () => {
  return (
    <div className="home-section">
      <div className="header color2">
        <span className="title">JavaScript Fundamentals</span>
      </div>
      <div className="home-content">
        <p>
          Here includes all the fundamental aspects of Javascript. i tend to
          think of the fundamentals as a very important part of any knowledge
          base. No matter how advanced you bevcome in your knowledge you are
          still at the mercy of the fundamenta aspects of that thing.
        </p>
        <div className="section-header">Assignment Operators</div>
        <DataTable list={assignList} />
        <div className="section-header">Common things</div>
        <DataTable list={commonList} />
        <div className="section-header">Comparison Operators</div>
        <DataTable list={compList} />
        <div className="section-header">Type Coersion and Conversion</div>
        <p>
          Javascript will convert types to other types when the situation calls
          for it.
        </p>

        <div className="section-header">Sample Code</div>
        <p>Here is some Sample Code to test the code block</p>
        <CodeBlock code={code1} />
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </div>
    </div>
  );
};

export default Fundamentals;
