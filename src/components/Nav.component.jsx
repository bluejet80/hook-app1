import { Link } from "react-router-dom";

const Nav = (props) => {
  const links = props.links;
  const colors = props.colors;
  return (
    <div className="side-nav">
      {links.map((item, index) => {
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

export default Nav;
