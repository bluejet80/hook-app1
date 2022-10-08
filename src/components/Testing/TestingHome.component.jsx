import { pageStyles } from "./data/styles";
const TestingHome = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Testing Studies</span>
      </div>
      <div className={pageStyles.homeContent}>
        <p>
          We are going to try to make a website for all the javascript learning
          information.
        </p>
        <p>
          I also want to add information about Agile project management to this
          section.
        </p>
      </div>
    </div>
  );
};

export default TestingHome;
