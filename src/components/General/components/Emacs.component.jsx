import { Footer } from "../../index";
import { DataTable } from "../../index";
import {
  emacsTable1,
  emacsTable2,
  emacsTable3,
  emacsTable4,
  emacstable5,
} from "../data/tableData";
import { emacsInit1 } from "../data/emacsInit";
import { CodeCLBlock } from "../../CodeBlock.component";

const Emacs = () => {
  return (
    <div className="home-section color11">
      <div className="header color5">
        <span className="title">Emacs Information</span>
      </div>
      <div className="home-content white-text">
        <div className="section-header">Emacs Commands</div>
        <h3>Text manipulation</h3>
        <DataTable list={emacsTable1} />
        <h3>To Move around text</h3>
        <DataTable list={emacsTable2} />
        <h3>Grow and Shrink Text</h3>
        <DataTable list={emacsTable3} />
        <h3>Buffers and Windows</h3>
        <DataTable list={emacsTable4} />
        <h3>Helpful Information</h3>
        <DataTable list={emacstable5} />

        <div className="section-header">Org-Roam</div>

        <div className="section-header">Package Management</div>

        <div className="section-header">Emacs init file</div>
        <CodeCLBlock code={emacsInit1} />

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Emacs;
