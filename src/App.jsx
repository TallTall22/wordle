import { useEffect, useState } from "react";
import database from "./data/database.json"
import Wordle from "./components/Wordle";

function App() {
  const [solution,setSolution]=useState(null)

  useEffect(()=>{
    const data=database.solutions
    const randomsolution=data[Math.floor(Math.random()*data.length)]
    setSolution(randomsolution.word)
  },[setSolution])
  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution&&<Wordle solution={solution}/>}
    </div>
  );
}

export default App;
