import { Footer } from "../../index";

const JSX = () => {
  return (
    <div className="home-section color16">
      <div className="header color14">
        <span className="title">JSX Studies</span>
      </div>
      <div className="home-content">
        <div className="section-header">Random Thoughts</div>
        <p>
          This is the reason why you put things into a index.js file. Its
          because then when you are in other componenets and you want to import
          a component, the atocorrect works well to show you the different
          components that are avaiable if you create an index file. this is
          where everything from that folder is brought together.{" "}
        </p>

        <p>You can also have function expressions as elements of an array</p>

        <h3>this thing</h3>
        <p>
          Innovation comes from the poor. And then the rich take it from the
          poor, those who dont have the connections and those who are
          disadvantaged. And they take these cool awesome ideas and they sell
          them as their own and then make a bunch of money out if it which in
          turn makes them more retarded. And then the poor stay por and they get
          smarter. they have always had to overcome their surroundings, they are
          unlike the rich who are allowed to do as they wish adn isolate
          themselves from the universe and act independently of the universe.
        </p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default JSX;
