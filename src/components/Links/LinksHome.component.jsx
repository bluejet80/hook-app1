import { pageStyles } from "./data/styles";

const LinksHome = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Links Home</span>
      </div>
      <div className={pageStyles.homeContent}>
        <p>This section is full of links to interesting things.</p>
      </div>
    </div>
  );
};

export default LinksHome;
