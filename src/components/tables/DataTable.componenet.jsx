const DataTable = (list) => {
  return (
    <table className="table-main">
      {list.list.map((item, index) => {
        return (
          <tr className="table-row" key={index}>
            <td>{item[0]}</td>
            <td>{item[1]}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default DataTable;
