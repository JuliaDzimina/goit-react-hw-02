import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";

function App() {
  const [feetbach, setFeetback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <>
      <Description />
    </>
  );
}

export default App;
