import { Footer } from "../../index";
const Middleware = () => {
  return (
    <div className="home-section color6">
      <div className="header color5">
        <span className="title">Middleware Concepts</span>
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

export default Middleware;
