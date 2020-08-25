import React, { useEffect, useState } from "react";
import { drawNewProblemInteractor } from "../interactor/drawNewProblem";
import "./App.css";
import { Problem } from "../entity/problem";

const App = () => {
  const [problem, setProblem] = useState<Problem | null>();

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
            if (!params[key]) {
              return null;
            }
            return (
              <span key={key}>
                {key} : {params[key]}
              </span>
            );
          })}
      </header>
    </div>
  );
};

export default App;
