import { DataTable } from "../index";

const runNode = [
  ["node", "Run the Node REPL in terminal"],
  [".exit", "Exits REPL"],
  ["node -v", "Print Current Version"],
  ["node filename.js", "Executes node code in filename.js"],
];

const NodeJSHome = () => {
  return (
    <div className="home-section color6">
      <div className="header color5">
        <span className="title">NodeJS Studies</span>
      </div>
      <div className="home-content">
        <div className="section-header">Node.js Basics</div>
        <p>
          Node is an environment that allows you to run javascript code outside
          of the browser.
        </p>
        <DataTable list={runNode} />
        <div className="section-header">Upgrading Node and NPM</div>
        <p>Here is information on how to upgrade node and npm.</p>
      </div>
    </div>
  );
};

export default NodeJSHome;
