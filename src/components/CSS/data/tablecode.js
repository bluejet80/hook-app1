export const TableCSS = `
    .table-main {
      table-layout: auto;
      width: 70%;
      border: 3px solid black;
      padding: 3px;
      text-align: center;
      border-collapse: collapse;
      margin: 10px 20px;
    }

    .table-cell {
      padding: 10px;
      border-left: 1px grey solid;
      border-bottom: 1px grey solid;
    }

`;

export const TableJsx = `
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

`;
