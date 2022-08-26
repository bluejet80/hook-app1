import { Footer } from "../../index";

const Objects = () => {
  return (
    <div className="home-section color1">
      <div className="header color2">
        <span className="title">JavaScript Objects</span>
      </div>
      <div className="home-content">
        <p>Here we explain more about Javascript Objects.</p>
        <div className="section-header">Arrow Functions</div>
        <p>
          An arrow function is a shorter form of function expression that is
          more compact and easier to write. However Arrow functions DO NOT get a
          'this' keyword.
        </p>

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Objects;
