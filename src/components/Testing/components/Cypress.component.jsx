import { Footer } from "../../index";

const Cypress = () => {
  return (
    <div className="home-section color13">
      <div className="header color16">
        <span className="title">Testing in Cypress</span>
      </div>
      <div className="home-content">
        <div className="section-header">First Thing</div>
        <p>Stuff</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Cypress;
