import { Footer } from "../../index";
import { DataTable, CodeJSBlock } from "../../index";
import { regexTable1, regexTable2 } from "../data/tableData";
import { regEx1, regEx2 } from "../data/codeData";

const RegEx = () => {
  return (
    <div className="home-section color11">
      <div className="header color5">
        <span className="title">Regular Expressions</span>
      </div>
      <div className="home-content white-text">
        <div className="section-header">Reference Table</div>
        <p>
          This is a Javascript reference table. Its different if you are working
          with sed on the command line.
        </p>
        <DataTable list={regexTable1} />
        <p>This is the Table for working on the command line:</p>
        <DataTable list={regexTable2} />
        <div className="section-header">Useful Processes</div>
        <h3>Add Zeros to filenames</h3>
        <p>
          Frequently to get files to display in the correct order you must add a
          certain amount of zeros to the beginning of the number. This can be
          done on several files at once with the use of the <strong>Sed</strong>{" "}
          command and regular expressions.
        </p>
        <p>Here is the code</p>
        <p className="highlight">
          ls | sed 's/\(Page\)\([0-9].\..*\)/mv & \10\2/' | sh
        </p>

        <p>
          Then I used a program called <strong>img2pdf</strong> to convert
          images into a single PDF file.
        </p>
        <p>Here is how you run that program</p>
        <p className="highlight">img2pdf *.jpg -o name_of_pdf.pdf</p>
        <div className="section-header">Regex in JavaScript</div>
        <p>
          Regular exspressions are patterns used to match character combinations
          in strings. In Javascript, regular expressions are also objects. These
          patterns are used with the{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec"
            target="blank"
          >
            exec()
          </a>
          , and{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test"
            target="blank"
          >
            test()
          </a>{" "}
          methods of{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"
            target="blank"
          >
            RegExp
          </a>
          , and with the{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match"
            target="blank"
          >
            match()
          </a>
          ,
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll"
            target="blank"
          >
            matchAll()
          </a>
          ,{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace"
            target="blank"
          >
            replace()
          </a>
          ,{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll"
            target="blank"
          >
            replaceAll()
          </a>
          ,{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search"
            target="blank"
          >
            search()
          </a>
          , and{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"
            target="blank"
          >
            split()
          </a>{" "}
          methods of{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
            target="blank"
          >
            String
          </a>
          .
        </p>
        <h3>Constructing a Regular Expression</h3>
        <p>regualr expressions can be constructed in one of two ways.</p>

        <p>Using a regular expression literal:</p>
        <CodeJSBlock code={regEx1} />

        <p>Or calling the constructor function of the RegExp object:</p>

        <CodeJSBlock code={regEx2} />

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default RegEx;
