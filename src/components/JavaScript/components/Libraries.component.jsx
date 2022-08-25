import { DataTable, CodeBlock, Footer } from "../../index";

const Libraries = () => {
  return (
    <div className="home-section">
      <div className="header color2">
        <span className="title">JavaScript Libraries</span>
      </div>
      <div className="home-content color1">
        <div className="section-header">Heading 1</div>
        <p>Paragraph1</p>

        <p>You can also have function expressions as elements of an array</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Libraries;
