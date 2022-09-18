import { Footer } from "../../index";

const Planning = () => {
  return (
    <div className="home-section color11">
      <div className="header color5">
        <span className="title">App Planning Information</span>
      </div>
      <div className="home-content white-text">
        <div className="section-header">Creating a Project Flowchart</div>
        <p>
          There is a great website that allows you to create a flow chart for
          your project it is here:{" "}
          <a href="https://app.diagrams.net/">Diagrams.net website</a>
        </p>

        <p>
          From here I want to also have links to the various worksheet PDFs that
          I have made.
        </p>

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Planning;
