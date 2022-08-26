import { Footer } from "../../index";

const Test = () => {
  return (
    <div className="home-section color9">
      <div className="header color11">
        <span className="title">Test</span>
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

export default Test;
