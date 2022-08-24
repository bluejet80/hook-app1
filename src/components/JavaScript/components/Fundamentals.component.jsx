import { DataTable, CodeBlock, Footer } from "../../index";
import {
  conversionCode,
  equalCode,
  switchCode,
  tempLit1,
  tempLit2,
  tempLit3,
} from "../Data/FundCode";
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
          You can use the Number() function to convert a string to a number and
          then the String() function to convert a number to a string.
        </p>
        <p>There is also a couple of things to note here:</p>
        <CodeBlock code={conversionCode} />
        <div className="section-header">Let,Const and Var</div>

        <p>
          It's simple. Always use Const unless you are creating a variable that
          you know will change, then use let. Never use Var.
        </p>
        <div className="section-header">Operator Precedence</div>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table">
          Link to MDN Precedence Website
        </a>
        <p>
          This is all about the order in which the operators will be executed.
        </p>
        <div className="section-header">String and Template Literals</div>
        <p>
          There are a couple of different ways of getting variables into
          strings.
        </p>
        <p>You can use the + to concatenate</p>
        <CodeBlock code={tempLit1} />
        <p>You can use the comma</p>
        <CodeBlock code={tempLit2} />
        <p>Or you can use a Template Literal(Backticks)</p>
        <CodeBlock code={tempLit3} />
        <p>
          Some programmers just use backtick for all of their string creation
          and then if they need or want to add a variable, it is super easy to
          do so.
        </p>
        <p>
          Also you can introduce newlines very easily with the backticks as
          well.
        </p>
        <div className="section-header">Equality Operators</div>
        <p>
          The == is a loose equality operator. It will show equality for strings
          and numbers
        </p>
        <CodeBlock code={equalCode} />
        <p>Always use the triple equals ===</p>
        <div className="section-header">The Switch Statement</div>
        <p>
          Just remember to add a break keyword after each case in the switch
          statement
        </p>
        <CodeBlock code={switchCode} />
        <div className="section-header">Strict Mode</div>
        <p>Strict Mode is a mode that makes your code more secure</p>
        <p>
          You implement Strict Mode by adding the string 'use strict' to the
          beginning of your script file.
        </p>
        <Footer complete={true} />
      </div>
    </div>
  );
};

export default Fundamentals;
