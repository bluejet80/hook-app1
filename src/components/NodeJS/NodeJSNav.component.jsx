const names = [
  "System Modules",
  "Express",
  "MongoDB",
  "NPM",
  "Node Basics",
  "Middleware",
  "REST API",
  "Postman",
];
const colors = ["color5", "color6", "color7", "color8"];

const NodeJSNav = () => {
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

export default NodeJSNav;
