import React from "react";
import "./App.css";

function Test({test}) {
    const [showConfig, setShowConfig] = React.useState(false);
    console.log("in test", test)
    console.log("in test", test.name)

  return (
    <div>
      <h2>{test.name}</h2>
      <button
        onClick={() => {
          setShowConfig(!showConfig);
        }}
      >
        {showConfig ? "Hide Test Config" : "Show Test Config"}
      </button>
      {showConfig && <div>{JSON.stringify(test.config)}</div>}
    </div>
  );
}

export default Test;
