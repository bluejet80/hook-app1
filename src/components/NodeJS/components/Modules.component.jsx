import { Footer } from "../../index";
import {
  commonJSCode1,
  commonJSCode2,
  commonJSCode3,
  commonJSCode4,
  commonJSCode5,
  esModuleCode1,
  esModuleCode2,
  esModuleCode3,
  esModuleCode4,
} from "../data/nodeCode";
import { CodeJSBlock } from "../../index";

const Modules = () => {
  return (
    <div className="home-section color6">
      <div className="header color5">
        <span className="title">Node.js Module System</span>
      </div>
      <div className="home-content">
        <div className="section-header">Importing/Exporting</div>
        <p>
          There are two different ways of importing modules in Node and
          JavaScript
        </p>
        <ul>
          <li>CommonJS Modules</li>
          <li>ES Modules</li>
        </ul>
        <h3>CommonJS Modules</h3>
        <p>
          CommonJS is the standard used by NodeJS to encapsulate JavaScript In
          modules. <strong>module.exports</strong> is used to export CommonJS
          modules, and <strong>import</strong> function is used to include
          modules into separate files.
        </p>
        <p>
          The Synchronous behavior of the require function makes it not
          appealing to front end work.
        </p>
        <p>
          Calling <strong>require()</strong> always use the CommonJS module
          loader. Calling <strong>import()</strong> always use the ECMAScript
          module loader.
        </p>
        <p>
          In Node.js, each file is treated like a separate module. For example,
          take the file foo.js:
        </p>
        <CodeJSBlock code={commonJSCode1} />
        <p>
          On the first line, foo.js loads the module circle.js that is in the
          same directory as foo.js. Here are the contents of circle.js:
        </p>
        <CodeJSBlock code={commonJSCode2} />
        <p>
          The module circle.js has exported the functions area() and
          circumference(). Functions and objects are added to the root of a
          module by specifying additional properties on the special exports
          object. Variables local to the module will be private, because the
          module is wrapped in a function by Node.js (see module wrapper). In
          this example, the variable PI is private to circle.js.
        </p>
        <p>
          The module.exports property can be assigned a new value (such as a
          function or object).
        </p>
        <p>
          Below, bar.js makes use of the square module, which exports a Square
          class:
        </p>
        <CodeJSBlock code={commonJSCode3} />
        <p>The square module is defined in square.js:</p>
        <CodeJSBlock code={commonJSCode4} />
        <p>This shows how the modules.exports works</p>
        <CodeJSBlock code={commonJSCode5} />
        <p>
          The CommonJS module system is implemented in the{" "}
          <a href="https://nodejs.org/api/module.html">module core module</a>.
        </p>

        <h3>ES Modules</h3>
        <p>
          ES Modules is the official standard used in JavaScript. ES Modules use{" "}
          <strong>import</strong> and <strong>export</strong> statements to deal
          with modules. It resolves one of the biggest limitations of CommonJS,
          which is synchronous loading.
        </p>
        <h3>Require Vs. Import</h3>
        <p>
          Both require and import are used to include modules. But they have
          several important features you should be aware of.
        </p>
        <p>
          Require Statements can be called anywhere in the code. Whereas the
          Import is always done at the top of the file.
        </p>
        <p>Require can also be called conditionally.</p>
        <h3>Code Examples</h3>
        <p>This is a default export in a file called esModule1.js</p>
        <CodeJSBlock code={esModuleCode1} />
        <p>This is the import of the default export</p>
        <CodeJSBlock code={esModuleCode3} />
        <p>
          When you import and export default, the original function can be named
          anything. It will always be exported as default. Then when you import
          the function in then you can name it whatever you want.
        </p>
        <p>
          This is how you export a specific function in the file esModule2.js
        </p>
        <CodeJSBlock code={esModuleCode2} />
        <p>Then you can import the function like this:</p>
        <CodeJSBlock code={esModuleCode4} />

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Modules;
