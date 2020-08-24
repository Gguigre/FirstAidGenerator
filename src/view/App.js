import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import "./App.css";
import { drawNewProblemInteractor } from "../interactor/drawNewProblem";

const App = () => {
  const [problem, setProblem] = useState();

  useEffect(() => {
    setProblem(drawNewProblemInteractor());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{problem && problem.getName()}</h1>
        <h2>Params</h2>
        {problem && JSON.stringify(problem.getParams())}
      </header>
    </div>
  );
};

export default App;
