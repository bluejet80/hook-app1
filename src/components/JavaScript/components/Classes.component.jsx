import { Footer } from "../../index";

const Classes = () => {
  return (
    <div className="home-section color1">
      <div className="header color2">
        <span className="title">Javascript Classes</span>
      </div>
      <div className="home-content">
        <div className="section-header">Overview</div>
        <p>
          A class is like a theoretical blueprint used to build a bunch of
          houses, or instances. The theoretical class can be used to create
          objects called instances which we can then use in our code. The
          process of creating an instance is called instantiation.
        </p>
        <div className="section-header">How does OPP work in JavaScript?</div>
        <p>
          In Javascript we have something called prototypes, and all objects in
          javascript are linked to a certain prototype object. The prototype
          object contains methods and properties that all the objects that are
          linked to that prototype can access and use. And this behavior is
          called <strong>prototypal inheritance</strong>. This can also be seen
          from another perspective where the object is delegating certain
          behaviors to the prototype.
        </p>
        <p>
          It is important to realize the difference between inheritance between
          two classes and inheritance between a class and an instance of that
          class.
        </p>

        <p>You can also have function expressions as elements of an array</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Classes;
