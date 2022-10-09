import { Footer } from "../../index";
import { CodeJSBlock } from "../../index";
import { reduxCode1 } from "../data/reactCode";
import { UnorderedList1 } from "../../index";
import { reduxList1, reduxList2 } from "../data/reduxList";
import redux_img1 from "../../../images/redux_img1.png";
import { pageStyles } from "../data/styles";

const Redux = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Redux Information</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Overview</div>
        <p>
          Here is a link to the{" "}
          <a href="https://redux.js.org/tutorials/essentials/part-1-overview-concepts">
            Introduction tutorial
          </a>
        </p>
        <p>
          Redux is a pattern and library for managing and updating application
          state, using events called "actions".
        </p>
        <p>
          It serves as a centralized store for state that needs to be used
          across your entire application, with rules ensuring that the state can
          only be updated in a predictable fashion.
        </p>
        <h3>Redux Terms and Concepts</h3>
        <h4>State Management</h4>
        <p>
          Let's start by looking at a small React counter component. It tracks a
          number in component state, and increments the number when a button is
          clicked:
        </p>
        <CodeJSBlock code={reduxCode1} />
        <p>It is a self-contained app with the following parts:</p>
        <UnorderedList1 list={reduxList1} />
        <p>This is a small example of "one-way data flow":</p>
        <UnorderedList1 list={reduxList2} />
        <h3>One-way data flow</h3>
        <img className="img1" src={redux_img1} />
        <p>
          However, the simplicity can break down when we have multiple
          components that need to share and use the same state, especially if
          those components are located in different parts of the application.
          Sometimes this can be solved by "lifting state up" to parent
          components, but that doesn't always help.
        </p>
        <p>
          One way to solve this is to extract the shared state from the
          components, and put it into a centralized location outside the
          component tree. With this, our component tree becomes a big "view",
          and any component can access the state or trigger actions, no matter
          where they are in the tree!
        </p>
        <p>
          By defining and separating the concepts involved in state management
          and enforcing rules that maintain independence between views and
          states, we give our code more structure and maintainability.
        </p>
        <p>
          Link to{" "}
          <a href="https://daveceddia.com/javascript-references/">
            Info on References
          </a>
        </p>

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Redux;
