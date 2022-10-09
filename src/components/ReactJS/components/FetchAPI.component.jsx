import { Footer } from "../../index";
import { fetchCodeCC } from "../data/reactCode";
import { CodeJSBlock } from "../../index";
import { pageStyles } from "../data/styles";

const FetchAPI = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Fetch API</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>How fetch Works</div>
        <p>
          Fetch is an API that is available in the browser to your JS Code and
          is used to get information and data from other websites.
        </p>
        <p>It is pretty easy to use the syntax is simple:</p>
        <CodeJSBlock code={fetchCodeCC} />
        <p>
          This is what the implementation will look like within a class
          component. We use the componentDidMount() method to ensure that the
          fetch call just runs once after the main app is loaded.
        </p>
        <p>A promise is returned from Fetch when it is used.</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default FetchAPI;
