const InternalLinkNav = (props) => {
  const links = props.links;
  return (
    <div className="internal-link-nav">
      <ul className="main-links">
        {links.map((item, index) => {
          return (
            <li className="no-list" key={index}>
              <a href={"#" + item[0]}>{item[1]}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InternalLinkNav;
