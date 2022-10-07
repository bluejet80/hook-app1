import { pageStyles } from "./Data/styles";

const JavaScriptHome = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>JavaScript Studies</span>
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

export default JavaScriptHome;
