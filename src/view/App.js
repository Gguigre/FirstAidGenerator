import React, { useEffect, useState } from "react";
import { drawNewProblemInteractor } from "../interactor/drawNewProblem";
import "./App.css";

const App = () => {
  const [problem, setProblem] = useState();

  useEffect(() => {
    setProblem(drawNewProblemInteractor());
  }, []);

  const params = problem && problem.getParams();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{problem && problem.getName()}</h1>
        <h2>Params</h2>
        {params &&
          Object.keys(params).map((key) => {
            return (
              <span>
                {key} : {params[key]}
              </span>
            );
          })}
      </header>
    </div>
  );
};

export default App;
