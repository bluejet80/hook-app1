import { CopyBlock, googlecode } from "react-code-blocks";

export const CodeJSBlock = (props) => {
  return (
    <div className="code-block">
      <CopyBlock text={props.code} language="javascript" theme={googlecode} />
    </div>
  );
};

export const CodeCSSBlock = (props) => {
  return (
    <div className="code-block">
      <CopyBlock text={props.code} language="css" theme={googlecode} />
    </div>
  );
};

export const CodeHTMLBlock = (props) => {
  return (
    <div className="code-block">
      <CopyBlock text={props.code} language="html" theme={googlecode} />
    </div>
  );
};

export const CodeJSXBlock = (props) => {
  return (
    <div className="code-block">
      <CopyBlock text={props.code} language="jsx" theme={googlecode} />
    </div>
  );
};

export const CodeCLBlock = (props) => {
  return (
    <div className="code-block">
      <CopyBlock text={props.code} language="lisp" theme={googlecode} />
    </div>
  );
};
