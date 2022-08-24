import { DataTable, CodeBlock, Footer } from "../../index";
import { ternaryCode1, ternaryCode2 } from "../Data/FundCode";
import { assignList, commonList, compList } from "../Data/FundTables";

const Boolean = () => {
  return (
    <div className="home-section">
      <div className="header color2">
        <span className="title">Booleans in Javascript</span>
      </div>
      <div className="home-content">
        <div className="section-header">Boolean Logic</div>
        <p>
          Boolean Logic is a branch of Computer Science that uses true and false
          values to solve complex logical problems.
        </p>
        <div className="section-header">Several Logical Operators are used</div>
        <ul>
          <li>AND Operator &&</li>
          <li>OR Operator ||</li>
          <li>NOT Operator !</li>
        </ul>
        <div className="section-header">The Conditional Operator</div>
        <p>This is also referred to as the Ternary Operator.</p>
        <CodeBlock code={ternaryCode1} />
        <p>Here we see the syntax and how the conditional operator works.</p>
        <p>
          Conditional Operator is an expression and can be used to define
          variables like this:
        </p>
        <CodeBlock code={ternaryCode2} />
        <p>
          This also means that the conditional operator you can have
          conditionals inside the template literal
        </p>
        <div className="section-header">5 Falsy Values</div>
        <ul>
          <li>Zero</li>
          <li>Empty String</li>
          <li>undefined</li>
          <li>null</li>
          <li>NaN</li>
        </ul>
        <p>
          Just like with numbers and strings you can use the Boolean() function
          to convert anything to boolean.
        </p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Boolean;
