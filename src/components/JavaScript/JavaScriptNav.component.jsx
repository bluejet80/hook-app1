import { Link } from "react-router-dom";

const names = [
  "fundamentals",
  "boolean",
  "strings",
  "arrays",
  "functions",
  "objects",
  "classes",
  "chaining",
  "closures",
  "destructuring",
  "reduce",
  "map",
  "filter",
  "looping",
  "testing",
];
const colors = ["color1", "color2", "color3", "color4"];

const JavaScriptNav = () => {
  return (
    <div className="side-nav">
      {names.map((item, index) => {
        const num = index % 4;
        return (
          <Link to={item} key={index}>
            <div className={"link-node " + colors[num]}>
              <div className="link-node_name">{item}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default JavaScriptNav;
