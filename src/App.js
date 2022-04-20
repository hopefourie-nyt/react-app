import React, { useEffect } from "react";
import Test from "./Test"
import "./App.css";

function App() {
  const [tests, setTests] = React.useState([]);
  console.log("in App", tests)

  useEffect(() => {
    fetch("http://abra.localhost.nytimes.com:3001/api")
      .then((res) => res.json())
      .then((data) => setTests(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hope's Nginx Example Site
        </h1>
        <p>
          {!tests
            ? "Loading..."
            : tests.map((test) => {
              console.log("in .map", test)
                return (
                  <Test test={test}/>
                );
              })}
        </p>
      </header>
    </div>
  );
}

export default App;
