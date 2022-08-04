import { NavBar } from "./components";
import "./app.styles.css";

const linkList = [
  ["#home", "Home"],
  ["#articles", "Articles"],
  ["#favs", "Favs"],
  ["#books", "Books"],
  ["#contact", "Contact"],
];

const App = () => {
  return (
    <div className="App">
      <div className="top-part">
        <NavBar menuList={linkList} />
      </div>
    </div>
  );
};

export default App;
