import { CopyBlock, hopscotch } from "react-code-blocks";

const CodeBlock = (props) => {
  return (
    <div className="code-block">
      <CopyBlock text={props.code} language="javascript" theme={hopscotch} />
    </div>
  );
};

export default CodeBlock;
