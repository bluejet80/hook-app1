const names = ["VIM", "VS Code", "Emacs", "Vim Themes", "VS Code Ext", "Slime"];
const colors = ["color1", "color2", "color3", "color4"];

const EditorsNav = () => {
  return (
    <div className="side-nav">
      {names.map((item, index) => {
        const num = index % 4;
        return (
          <a href={"/src/" + item} key={index}>
            <div className={"link-node " + colors[num]}>
              <div className="link-node_name">{item}</div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default EditorsNav;
