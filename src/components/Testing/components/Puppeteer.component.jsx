import { Footer } from "../../index";

const Puppeteer = () => {
  return (
    <div className="home-section color13">
      <div className="header color16">
        <span className="title">Testing With Puppeteer</span>
      </div>
      <div className="home-content">
        <div className="section-header">First thing</div>
        <p>Stuff</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Puppeteer;
