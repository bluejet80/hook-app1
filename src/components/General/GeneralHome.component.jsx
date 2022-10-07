import { pageStyles } from "./data/styles";

const GeneralHome = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>
          General Information about stuff
        </span>
      </div>
      <div className={pageStyles.homeContent}>
        <p>
          We are going to try to make a website for all the javascript learning
          information.
        </p>
      </div>
    </div>
  );
};

export default GeneralHome;
