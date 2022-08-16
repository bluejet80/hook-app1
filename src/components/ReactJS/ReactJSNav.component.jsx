const names = [
  "fundamentals",
  "environment",
  "strings",
  "objects",
  "classes",
  "chaining",
  "boolean",
  "functions",
  "closures",
  "this",
  "destructuring",
  "reduce",
  "map",
  "filter",
  "looping",
  "testing",
];
const colors = ["color13", "color14", "color15", "color16"];

const ReactJSNav = () => {
  return (
    <div className="side-nav">
      {names.map((item, index) => {
        const num = index % 4;
        return (
          <a href={"/" + item} key={index}>
            <div className={"link-node " + colors[num]}>
              <div className="link-node_name">{item}</div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ReactJSNav;
