import { Footer } from "../../index";
import { DataTableLink } from "../../index";
import {
  packageTable,
  restAPITable1,
  mvcTable,
  fullStackTable,
} from "../data/TableData";
import { pageStyles } from "../data/styles";

const Packages = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Node.js Packages</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>
          Classes of Node.js Frameworks
        </div>
        <h3>MVC Frameworks</h3>
        <p>
          Model View Controller or MVC is architectural anatomy used as the
          foundation for building flexible frameworks, allowing developers to
          create each application layer separately.{" "}
        </p>
        <p>Table of MVC Frameworks</p>
        <DataTableLink list={mvcTable} />

        <h3>REST API Frameworks</h3>
        <p>
          REST API frameworks offer a ready-to-program interface that saves
          developers time, effort, and money. REST API frameworks are also
          useful for developing reliable server-client communication routes.
        </p>
        <p>Table of REST API Frameworks</p>
        <DataTableLink list={restAPITable1} />

        <h3>Full-stack MVC Frameworks</h3>
        <p>
          Full-stack MVC frameworks support and manage both the frontend and
          backend development of a mobile app, and provide various tools for
          developing and updating software.
        </p>
        <p>Table of Full-Stack Frameworks</p>
        <DataTableLink list={fullStackTable} />

        <div className={pageStyles.sectionHeader}>Table of Useful Packages</div>
        <DataTableLink list={packageTable} />

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Packages;
