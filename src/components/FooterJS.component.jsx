const Footer = (props) => {
  const completed = props.complete ? "Completed" : "Still under construction";
  return (
    <div className="footer-js">
      <p className="footer-title-js">Study Website</p>
      <p>This site was began in August of 2022</p>
      <p>This section is {completed}</p>
    </div>
  );
};

export default Footer;
