import { ObjectTable, CodeJSBlock, Footer } from "../../index";
import { globalObject } from "../data/ObjectData";
import { sysArgs, dirCode } from "../data/nodeCode";
const code1 = `
  setTimeout(() => {
      console.log('hello');
  }, 5000)

`;

const Global = () => {
  return (
    <div className="home-section color6">
      <div className="header color5">
        <span className="title">Node.js Global Object</span>
      </div>
      <div className="home-content">
        <p>
          In Node, we have a <span className="code-span">global</span> object
          that we can always access. Features that we expect to be available
          everywhere live in this <span className="code-span">global</span>{" "}
          object.
        </p>
        <p>
          For example, to have some code executed after 5 seconds we can use
          either <span className="code-span">global.setTimeout</span> or just{" "}
          <span className="code-span">setTimeout</span>. The{" "}
          <span className="code-span">global</span> keyword is optional.
        </p>
        <CodeJSBlock code={code1} />
        <p>
          Probably the most famous global is{" "}
          <span className="code-span">global.console.log</span> which we write
          as just <span className="code-span">console.log</span>.
        </p>

        <div className="section-header">Getting Args from CLI</div>
        <p>
          Here we will quickly go over getting arguments passed from the command
          line to your program.
        </p>
        <CodeJSBlock code={sysArgs} />

        <p>
          This one line then produces an array of all the commandline arguments
          that were passed when your program was ran.
        </p>

        <div className="section-header">Useful Functions</div>
        <h3>Show the current direcotry</h3>
        <CodeJSBlock code={dirCode} />

        <hr />
        <div className="section-header">The Global Object</div>
        <p>This is a table of the methods in the global object</p>

        <ObjectTable list={globalObject} />

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Global;
