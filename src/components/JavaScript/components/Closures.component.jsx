import { CodeJSBlock, FooterJS } from "../../index";
import { pageStyles } from "../Data/styles";
import { curryCode1, curryCode2 } from "../Data/ClosureCode";

const Closures = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Special Function Techniques</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Currying</div>
        <p>
          Currying is difficult to understand but once you get it, it is very
          useful.
        </p>
        <h4>Example 1</h4>
        <p>Take this code for instance...</p>
        <CodeJSBlock code={curryCode1} />
        <p>
          This is called currying. It allows us to create new functions from
          other functions.
        </p>
        <p>Lets look at another example:</p>
        <CodeJSBlock code={curryCode2} />
        <p>
          We have just created 3 new functions from an array - we have litreally
          turned data into code at runtime. It gets much more exciting than
          this, but ultimately arrow functions, and their ability to easily
          create currying, is a benefit.
        </p>
        <p>
          So initially I had an array of numbers, then I had an array of
          functions. That means that if I typed
          <span className="highlight">array[0]()</span>
          it would be calling the function and I could pass whatever value I
          wanted into it. That's an interesting way calling a function.
        </p>

        <div className={pageStyles.sectionHeader}>Closures</div>
        <p>Paragraph1</p>

        <p>You can also have function expressions as elements of an array</p>
        <FooterJS complete={false} />
      </div>
    </div>
  );
};

export default Closures;
