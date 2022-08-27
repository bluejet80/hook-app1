const DataTable = (list) => {
  return (
    <table className="table-main">
      {list.list.map((item, index) => {
        return (
          <tr>
            <td className="table-cell">{item[0]}</td>
            <td className="table-cell">{item[1]}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default DataTable;
