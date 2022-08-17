const DataTable = (list) => {
  return (
    <div className="table-container">
      <div className="table-header"></div>
      {list.list.map((item, index) => {
        return (
          <div className="table-row" key={index}>
            <div className="table-data1">{item[0]}</div>
            <div className="table-data2">{item[1]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DataTable;
