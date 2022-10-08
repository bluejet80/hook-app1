import { CodeJSBlock, FooterJS } from "../../index";
import { ternaryCode1, ternaryCode2 } from "../Data/FundCode";
import { pageStyles } from "../Data/styles";

const Boolean = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Booleans in Javascript</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Boolean Logic</div>
        <p>
          Boolean Logic is a branch of Computer Science that uses true and false
          values to solve complex logical problems.
        </p>
        <div className={pageStyles.sectionHeader}>
          Several Logical Operators are used
        </div>
        <ul className="square-list">
          <li>AND Operator &&</li>
          <li>OR Operator ||</li>
          <li>NOT Operator !</li>
        </ul>
        <div className={pageStyles.sectionHeader}>The Conditional Operator</div>
        <p>This is also referred to as the Ternary Operator.</p>
        <CodeJSBlock code={ternaryCode1} />
        <p>Here we see the syntax and how the conditional operator works.</p>
        <p>
          Conditional Operator is an expression and can be used to define
          variables like this:
        </p>
        <CodeJSBlock code={ternaryCode2} />
        <p>
          This also means that the conditional operator you can have
          conditionals inside the template literal
        </p>
        <div className={pageStyles.sectionHeader}>5 Falsy Values</div>
        <ul className="square-list">
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
        <FooterJS complete={false} />
      </div>
    </div>
  );
};

export default Boolean;
