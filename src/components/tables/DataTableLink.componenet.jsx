const DataTableLink = (list) => {
  return (
    <table className="table-main">
      {list.list.map((item, index) => {
        return (
          <tr>
            <td className="table-cell">
              <a href={item[2]}>{item[0]}</a>
            </td>
            <td className="table-cell">{item[1]}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default DataTableLink;
