import { CodeJSBlock, FooterJS } from "../../index";
import { sortCode } from "../Data/FundCode";
import { pageStyles } from "../Data/styles";
const Arrays = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>JavaScript Arrays</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>
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
        <p>
          This array method can be used to populate an array that already exists
          with values, or objects, or arrays.
        </p>

        <div className={pageStyles.sectionHeader}>
          Array Methods that Create a New Array
        </div>
        <p>
          These methods will return a new array and leave the original array
          untouched.
        </p>
        <h3>array.map()</h3>
        <p>
          This method will interate over an array and apply a callback function
          to each element and then return the result as the element of a new
          array. The process leaves the original array intact.
        </p>
        <p>
          This method is used often to mutate arrays into other arrays. More
          about this method as well as more examples are discussed in another
          section.
        </p>
        <h3>array.filter()</h3>
        <p>
          This method will return a new array of only the elements that satisfy
          the conditional statement. It is a good way to filter an array and
          only get back those elements that meet certain criteria.
        </p>
        <p>
          This method could be used for variety of different techniques. More
          information as well as examples are in the section dedicated to this
          method.
        </p>
        <h3>array.slice()</h3>
        <p>
          This method does basically the same thing as the splice() method
          except that it doesn't effect the original array. Instead it returns a
          new array. Which is a porttion of the original.
        </p>
        <p>
          Using this method we can easily create a shallow copy of an array.
        </p>
        <h3>array.concat()</h3>
        <p>
          This method is used to join two arrays together into one large array.
        </p>
        <p>The syntax is array1.concat(array2)</p>
        <h3>array.flat()</h3>
        <p>
          This method will take an array of arrays and return a single array of
          elements
        </p>
        <h3>array.flatMap()</h3>
        <p>
          Frequetly after using the Map() method we need to flatten the array.
          And so instead of having to do two separate methods, this method rolls
          them all into one.
        </p>

        <div className={pageStyles.sectionHeader}>Return Array Index</div>
        <p>These methods will return an array index.</p>
        <h3>array.indexOf()</h3>
        <p>
          This method will give you the index of the element that matches the
          value that you pass to the method.
        </p>
        <h3>array.findIndex()</h3>
        <p>
          This method is similar to the last but instead of taking a value, the
          method accepts a conditional statement. And then it returns the
          indexes that satisfy the conditional statement.
        </p>

        <div className={pageStyles.sectionHeader}>Return Array Element</div>
        <p>These methods will return an array element.</p>
        <h3>array.find()</h3>
        <p>
          This method returns the element that matches the callback function
          that is passed to the method. Often this method is used to return
          objects from arrays of objects using the value of the object key that
          is desired.
        </p>
        <p>
          There are many things that can be passed to the callback function
          allowing for powerful funcitonality from this method.
        </p>

        <div className={pageStyles.sectionHeader}>Know if Array Includes</div>
        <p>
          These methods will return true or false if the condition is met, or a
          value is present.
        </p>
        <h3>array.includes()</h3>
        <p>
          Returns true or false if the array contains the value passed to the
          method.
        </p>
        <h3>array.some()</h3>
        <p>
          retruns true or false if the array contains atleast one of the values
          passed to the method.
        </p>
        <h3>array.every()</h3>
        <p>
          This method returns true or false if every element of the array meets
          a certain criteria.
        </p>

        <div className={pageStyles.sectionHeader}>Other Array Methods</div>
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
        <FooterJS complete={false} />
      </div>
    </div>
  );
};

export default Arrays;
