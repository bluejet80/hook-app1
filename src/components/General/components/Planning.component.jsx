import { Footer } from "../../index";
import { pageStyles } from "../data/styles";

const Planning = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>App Planning Information</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>
          Creating a Project Flowchart
        </div>
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
