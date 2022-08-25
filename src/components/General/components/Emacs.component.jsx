import { DataTable, CodeBlock, Footer } from "../../index";

const Emacs = () => {
  return (
    <div className="home-section">
      <div className="header color2">
        <span className="title">Emacs Information</span>
      </div>
      <div className="home-content color1">
        <p>
          So within this section I can have a table that will show all the
          shortcuts and stuff related to Emacs
        </p>
        <p>
          This information will be similar to that which is on the Reference
          website that I made.
        </p>
        <div className="section-header">Heading 1</div>
        <p>Paragraph1</p>
        <p>You can also have function expressions as elements of an array</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Emacs;
