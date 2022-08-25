import { DataTable, CodeBlock, Footer } from "../../index";
import { sortCode } from "../Data/FundCode";
const Arrays = () => {
  return (
    <div className="home-section">
      <div className="header color2">
        <span className="title">JavaScript Arrays</span>
      </div>
      <div className="home-content color1">
        <div className="section-header">
          Array Methods that Mutate Original Array
        </div>
        <h3>array.push()</h3>
        <p>This array method adds an element to the END of the array.</p>
        <h3>array.unshift()</h3>
        <p>This array method adds an element to the START of the array.</p>
        <h3>array.pop()</h3>
        <p>
          This array method pops(removes) the LAST element off of the array and
          returns it.
        </p>
        <h3>array.shift()</h3>
        <p>This array method removes the FIRST element, and returns it.</p>
        <h3>array.splice()</h3>
        <p>
          This array method removes the elements specified by the arguments
          passed to the method. The first argument is where to start removing
          and the second is where to stop and it is NOT included in the removal.
        </p>
        <p>Then, the elements that ARE removed are returned by the method.</p>
        <h3>array.reverse()</h3>
        <p>
          This array method reverses the order of the array. And then returns
          the reversed array. The original array is Modified in the process.
        </p>
        <h3>array.sort()</h3>
        <p>
          This array will take an array of strings and sort them in alphabetical
          order. It returns the sorted array and it will Mutate the original
          array.
        </p>
        <p>
          If you wish to correctly sort an array of numbers you will need to
          pass a sorting function to the method.
        </p>
        <p>Here are some examples:</p>
        <CodeBlock code={sortCode} />
        cd
        <h3>array.fill()</h3>
        <p>This array method removes the FIRST element, and returns it.</p>
        <p>You can also have function expressions as elements of an array</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Arrays;
