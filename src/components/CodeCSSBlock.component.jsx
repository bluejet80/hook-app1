import { CopyBlock, solarizedLight } from "react-code-blocks";

const CodeBlock = (props) => {
  return (
    <div className="code-block">
      <CopyBlock text={props.code} language="css" theme={solarizedLight} />
    </div>
  );
};

export default CodeBlock;
