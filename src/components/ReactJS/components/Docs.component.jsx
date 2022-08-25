import { DataTable, CodeBlock, Footer } from "../../index";

const Docs = () => {
  return (
    <div className="home-section color16">
      <div className="header color14">
        <span className="title">Useful React Documentation</span>
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
