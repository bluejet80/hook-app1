import { DataTable, CodeBlock, Footer } from "../../index";

const Lisp = () => {
  return (
    <div className="home-section color11">
      <div className="header color5">
        <span className="title">Lisp Information</span>
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

export default Lisp;
