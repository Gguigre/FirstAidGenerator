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
        <span>{problem && problem.getName()}</span>
      </header>
    </div>
  );
};

export default App;
