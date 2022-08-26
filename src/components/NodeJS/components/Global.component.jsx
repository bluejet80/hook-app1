import { DataTable, CodeBlock, Footer } from "../../index";

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
        <CodeBlock code={code1} />
        <p>
          Probably the most famous global is{" "}
          <span className="code-span">global.console.log</span> which we write
          as just <span className="code-span">console.log</span>.
        </p>
        <div className="section-header">Heading 1</div>
        <p>Paragraph1</p>
        <p>You can also have function expressions as elements of an array</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Global;
