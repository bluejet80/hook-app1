import { Footer } from "../../index";

const Strings = () => {
  return (
    <div className="home-section color1">
      <div className="header color2">
        <span className="title">JavaScript Strings</span>
      </div>
      <div className="home-content">
        <div className="section-header">Working with Strings</div>
        <p>
          An arrow function is a shorter form of function expression that is
          more compact and easier to write. However Arrow functions DO NOT get a
          'this' keyword.
        </p>

        <p>You can also have function expressions as elements of an array</p>
        <Footer complete={true} />
      </div>
    </div>
  );
};

export default Strings;
