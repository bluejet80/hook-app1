import { CodeJSBlock, Footer } from "../../index";
import { arrowCode1, functCode1, functCode2 } from "../Data/FundCode";

const Functions = () => {
  return (
    <div className="home-section color1">
      <div className="header color2">
        <span className="title">JavaScript Functions</span>
      </div>
      <div className="home-content">
        <div className="section-header">Ways of Writing Functions</div>
        <h3>Function Declaration</h3>
        <p>With a function declaration a name for the function is specified</p>
        <CodeJSBlock code={functCode1} />
        <h3>Function Expression</h3>
        <p>
          With a function expression the name for the function is not specified
          and instead the anonymous function is assigned to a variable.
        </p>
        <CodeJSBlock code={functCode2} />
        <p>
          The biggest difference right now, between the two is that with
          function declarations, the function can be called before it is
          declared. But with function expressions, the function can not be
          called before it is declared. Internally this happens due to a process
          called hoisting.
        </p>
        <p>
          It might be a good habit to get into to write mostly function
          expressions because then your code will be organized better because
          you are forced to declare the functions before you use them.
        </p>
        <p>
          Some programmers choose to have everything stored in a variable.
          Function expressions are a way of doing that.
        </p>
        <div className="section-header">Arrow Functions</div>
        <p>
          An arrow function is a shorter form of function expression that is
          more compact and easier to write. However Arrow functions DO NOT get a
          'this' keyword.
        </p>
        <CodeJSBlock code={arrowCode1} />
        <p>You can also have function expressions as elements of an array</p>
        <Footer complete={true} />
      </div>
    </div>
  );
};

export default Functions;
