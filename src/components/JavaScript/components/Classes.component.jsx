import { CodeJSBlock, Footer } from "../../index";
import {
  constructCode,
  protoCode,
  classCode,
  getterCode1,
  getterCode2,
} from "../Data/ClassCode";

const Classes = () => {
  return (
    <div className="home-section color1">
      <div className="header color2">
        <span className="title">Javascript Classes</span>
      </div>
      <div className="home-content">
        <div className="section-header">Overview</div>
        <p>
          A class is like a theoretical blueprint used to build a bunch of
          houses, or instances. The theoretical class can be used to create
          objects called instances which we can then use in our code. The
          process of creating an instance is called instantiation.
        </p>
        <h3>How does OOP work in JS?</h3>
        <p>
          In Javascript we have something called prototypes, and all objects in
          javascript are linked to a certain prototype object. The prototype
          object contains methods and properties that all the objects that are
          linked to that prototype can access and use. And this behavior is
          called <strong>prototypal inheritance</strong>. This can also be seen
          from another perspective where the object is delegating certain
          behaviors to the prototype.
        </p>
        <p>
          It is important to realize the difference between inheritance between
          two classes and inheritance between a class and an instance of that
          class.
        </p>

        <div className="section-header">
          Three ways of Implementing OOP in JS
        </div>
        <ul>
          <li>Constructor Functions</li>
          <li>ES6 Classes</li>
          <li>Object.create()</li>
        </ul>

        <h3>Constructor Functions</h3>
        <p>
          This is a way of creating classes programatically with a function,
          which will also set the new object's prototype. This is similar to how
          built-in objects like arrays and maps and sets are implemented. This
          is how OOP has been done in Javascript from the beginning.
        </p>

        <h3>ES6 Classes</h3>
        <p>
          This is the more modern way of doing OOP in JavaScript. This method is
          not like regular classes in other languages. Its more of just
          "syntactic sugar" over the original constructor function method. ES6
          Classes are justa layer of abstraction over constructor functions and
          do not behave like classes in "classical OOP"
        </p>

        <h3>Object.create()</h3>
        <p>
          This is the easiest and most straightforward way of linking an object
          to a prtotype object. However is is not used very much.
        </p>

        <div className="section-header">
          The Four Principals of Object Oriented Programming
        </div>
        <p>
          Practicing these four principals will guide us to good class
          implemetation.
        </p>
        <h3>Abstraction</h3>
        <p>
          This means to ignore or hide details that don't matter, allowing us to
          get an overview perspective of the thing we are implementing, instead
          of messing with details that don't really matter to our
          implementation.
        </p>

        <h3>Encapsulation</h3>
        <p>
          This means to keep some properties and methods private inside classes,
          so that they are not accessible from outside of the class. Some
          methods are exposed and often they are referred to as the public
          interface or API
        </p>
        <p>
          Within JavaScript classes, the private methods are usually the ones
          which have an underscore at the beginning of their name.
        </p>
        <p>
          By having private properties and methods in classes the hope is to
          prevent external code from accidentally manipulating this internal
          state. The term State simply refers to an object's data.
        </p>
        <h3>Inheritance</h3>
        <p>
          Inheritance makes all properties and methods of a certain class
          available to a child class, forming a hierarchical relationship
          between classes. This allows us to reuse common logic and to model
          real-world relationships.
        </p>
        <h3>Polymorphism</h3>
        <p>
          Polymorphism is the concept that a child class can overwrite a method
          that it inherited from a parent class. That is the simple explanation
          at least. This is done in practice by creating a method in the child
          class, which is the same name as the one inherited from the parent
          class, but give it different characteristics and properties.
        </p>
        <div className="section-header">
          Examples of The three ways to implement OOP in JS
        </div>
        <h3>Constructor Functions</h3>
        <p>
          It is a convention within OOP that constructor functions always start
          with a capital lettter. Also a constructor function can not be an
          arrow function because it does not get a this keyword and we need that
          for constructor functions.
        </p>
        <p>
          When you call a constructor function with the <strong>new</strong>{" "}
          operator, there are four things that are going to happen.
        </p>
        <p>
          First, a new empty object is created. Second, the function is called
          and the this keyword is set to this new empty object. Then, the newly
          created object is linked to the prototype. Then finally, the function
          returns the bject from the beginning which is most likely not empty
          any more.
        </p>
        <CodeJSBlock code={constructCode} />

        <p>
          You should Never create methods within the constructor function. This
          is because that method will be recreated in every object that is
          created from that class. This results in very unefficient code and
          muliple duplications of code which is very bad.
        </p>

        <p>
          Instead we will use prototypes to create methods for our class. And
          then when we create objects from our class, they will reference the
          methods of the prototype and not have copies of them.
        </p>

        <h3>Prototypes</h3>
        <p>
          Each and every function in JavaScript has a property called prototype.
          Every object that is created by a certain constructor function will
          get access to all the methods and properties of that we define on the
          constructors prototype property.
        </p>
        <CodeJSBlock code={protoCode} />
        <p>
          Now all the objects that we create from this class will have access to
          the calcAge() Method.
        </p>

        <h3>ES6 Classes</h3>
        <p>Now we will do the same thing with ES6 Classes</p>
        <CodeJSBlock code={classCode} />
        <p>
          With this new syntax we can have the constructor function and declare
          the prototype methods all in one code block. Also with this there is
          no commas between the methods.
        </p>
        <p>
          Classes are not hoisted. Which means that you cannot use them before
          they are declared. Function declarations are hoisted and can be used
          above where they are present in the code. But this is not the case for
          Classes. Classes are also first-class citizens which means that they
          can be passed to functions and returned from functions. Also the body
          of a class is always executed in 'strict mode'.
        </p>

        <div className="section-header">Getters and Setters</div>
        <p>
          Getters and Setters are common to all objects in Javascript. All
          Objects in javascript can have Getter and Setter Properties. And we
          call these special properties <strong>Assessor Properties</strong>{" "}
          where normal properties are called <strong>data properties</strong>.
        </p>
        <p>
          Getters and Setters are functions that either GET or SET a value. But
          on the outside they still look like normal properties.
        </p>

        <h3>Examples of Getters and Setters</h3>

        <CodeJSBlock code={getterCode1} />

        <p>
          In the object they are written like a function only with the get or
          set keyword. But then when we go to use Getters or Setters we use them
          as we would any property.
        </p>
        <p>
          Getters and Setters work exactly the same in JS Classes as they do in
          Objects.
        </p>

        <p>
          Getters and Setters are quite useful for data validation. Lets see how
          they can help us with that.
        </p>

        <h3>Data Validation</h3>
        <CodeJSBlock code={getterCode2} />

        <p>
          Since our setter is named the same as a property that already exists,
          it will automatically get ran when we create a new instance of the
          class. This will cause problems if you do not use the pattern above.
          When using getters and setters that have the same name as properties
          that already exist, you must within the getter or setter, refer to the
          property with an underscore before the name. This infact creates a new
          variable and that is why you must have the getter to then retrieve the
          variable which is now under a different name.
        </p>
        <div className="section-header">Static Methods</div>

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Classes;
