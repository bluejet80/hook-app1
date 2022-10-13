import { Footer } from "../../index";
import { pageStyles } from "../data/styles";
import { DataTableLink2 } from "../../tables/DataTable.componenet";
import { emacsList } from "../data/links";

const EmacsLinks = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Emacs links</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Emacs Links</div>
        <p>Here are links to Topics on Emacs and Lisp.</p>
        <DataTableLink2 list={emacsList} />

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default EmacsLinks;
