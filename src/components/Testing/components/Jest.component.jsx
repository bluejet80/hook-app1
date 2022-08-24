function Jest() {
  return (
    <div className="home-section">
      <div className="header color2">
        <span className="title">Jest Basics</span>
      </div>
      <div className="home-content color1">
        <p>Here is information on the testing framework Jest.</p>
        <div className="section-header">Arrow Functions</div>
        <p>
          An arrow function is a shorter form of function expression that is
          more compact and easier to write. However Arrow functions DO NOT get a
          'this' keyword.
        </p>
        <CodeBlock code={code1} />
        <Footer complete={false} />
      </div>
    </div>
  );
}

export default Jest;
