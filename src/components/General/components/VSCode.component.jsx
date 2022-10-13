import { Footer } from "../../index";
import { pageStyles } from "../data/styles";

const VSCode = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>VS Code Information</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Hacks</div>
        <p>
          Addon called EMMIT for HTML, Gistpad, Balance out/in to select
          sections of code
        </p>

        <p>You can also have function expressions as elements of an array</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default VSCode;
