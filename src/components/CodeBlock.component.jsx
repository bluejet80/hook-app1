import { CopyBlock, solarizedLight } from "react-code-blocks";

export const CodeJSBlock = (props) => {
  return (
    <div className="code-block">
      <CopyBlock
        text={props.code}
        language="javascript"
        theme={solarizedLight}
      />
    </div>
  );
};

export const CodeCSSBlock = (props) => {
  return (
    <div className="code-block">
      <CopyBlock text={props.code} language="css" theme={solarizedLight} />
    </div>
  );
};

export const CodeHTMLBlock = (props) => {
  return (
    <div className="code-block">
      <CopyBlock text={props.code} language="html" theme={solarizedLight} />
    </div>
  );
};

export const CodeJSXBlock = (props) => {
  return (
    <div className="code-block">
      <CopyBlock text={props.code} language="jsx" theme={solarizedLight} />
    </div>
  );
};
