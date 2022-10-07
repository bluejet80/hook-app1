export const UnorderedList1 = (props) => {
  return (
    <ul>
      {props.list.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};
