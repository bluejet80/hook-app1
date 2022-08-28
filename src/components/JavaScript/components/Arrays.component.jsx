import { CodeJSBlock, Footer } from "../../index";
import { sortCode } from "../Data/FundCode";
const Arrays = () => {
  return (
    <div className="home-section color1">
      <div className="header color2">
        <span className="title">JavaScript Arrays</span>
      </div>
      <div className="home-content">
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
        <CodeJSBlock code={sortCode} />
        <h3>array.fill()</h3>
        <p>This array method removes the FIRST element, and returns it.</p>
        <p>You can also have function expressions as elements of an array</p>

        <div className="section-header">
          Array Methods that Create a New Array
        </div>
        <p>
          These methods will return a new array and leave the original array
          untouched.
        </p>
        <h3>array.map()</h3>
        <h3>array.filter()</h3>
        <h3>array.slice()</h3>
        <h3>array.concat()</h3>
        <h3>array.flat()</h3>
        <h3>array.flatMap()</h3>

        <div className="section-header">Return Array Index</div>
        <p>These methods will return an array index.</p>
        <h3>array.indexOf()</h3>
        <h3>array.findIndex()</h3>

        <div className="section-header">Return Array Element</div>
        <p>These methods will return an array element.</p>
        <h3>array.find()</h3>

        <div className="section-header">Know if Array Includes</div>
        <p>
          These methods will return true or false if the condition is met, or a
          value is present.
        </p>
        <h3>array.includes()</h3>
        <h3>array.some()</h3>
        <h3>array.every()</h3>

        <div className="section-header">Other Array Methods</div>
        <h3>Array.from()</h3>
        <p>
          This is a static method and it is used to create arrays from other
          objects.
        </p>

        <h3>array.reduce()</h3>
        <p>
          This method is used to trasform an array down to a single value. It is
          based on the Accumulator that is given. This method is covered in more
          detail in another section.
        </p>

        <h3>array.forEach()</h3>
        <p>
          This method does not return anything, it also has no effect on the
          original array. This method is meant to produce a side effect by
          iterating over the array and running each value through a callback
          function. This method is also covered in more detail in another
          section.
        </p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Arrays;
