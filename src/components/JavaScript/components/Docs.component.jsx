import { Footer } from "../../index";

const Docs = () => {
  return (
    <div className="home-section color1">
      <div className="header color2">
        <span className="title">Useful Documentation</span>
      </div>
      <div className="home-content">
        <div className="section-header">Heading 1</div>
        <p>Paragraph1</p>

        <p>You can also have function expressions as elements of an array</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Docs;
