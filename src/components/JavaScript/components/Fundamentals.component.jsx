import { DataTable } from "./index";

const itemList = [
  ["Item One", "Descripttion One thi si the description"],
  ["Item 2", "Description 2 this is the descriptiton."],
];

const Fundamentals = () => {
  return (
    <div className="home-section">
      <div className="header color2">
        <span className="title">JavaScript Fundamentals</span>
      </div>
      <div className="home-content color1">
        <div className="section-header">Math Operators</div>
        <DataTable list={itemList} />
        <p>
          We are going to try to make a website for all the javascript learning
          information.
        </p>
      </div>
    </div>
  );
};

export default Fundamentals;
