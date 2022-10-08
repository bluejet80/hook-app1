import { DataTable } from "../index";
import { pageStyles } from "./data/styles";

const runNode = [
  ["node", "Run the Node REPL in terminal"],
  [".exit", "Exits REPL"],
  ["node -v", "Print Current Version"],
  ["node filename.js", "Executes node code in filename.js"],
];

const NodeJSHome = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>NodeJS Studies</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Node.js Basics</div>
        <p>
          Node is an environment that allows you to run javascript code outside
          of the browser.
        </p>
        <DataTable list={runNode} />
        <div className={pageStyles.sectionHeader}>Upgrading Node and NPM</div>
        <p>Here is information on how to upgrade node and npm.</p>
      </div>
    </div>
  );
};

export default NodeJSHome;
