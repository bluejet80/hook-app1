import { Footer } from "../../index";
import { fetchCodeCC } from "../data/reactCode";
import { CodeJSBlock } from "../../index";

const FetchAPI = () => {
  return (
    <div className="home-section color16">
      <div className="header color14">
        <span className="title">Fetch API</span>
      </div>
      <div className="home-content">
        <div className="section-header">How fetch Works</div>
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
