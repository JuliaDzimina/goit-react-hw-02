import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feetbacks, setFeetbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedbacks = (feedbackType) => {
    setFeetbacks({
      ...feetbacks,
      [feedbackType]: feetbacks[feedbackType] + 1,
    });
  };
  const resetFeedbacks = () => {
    setFeetbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feetbacks.good + feetbacks.neutral + feetbacks.bad;

  return (
    <div>
      <Description />
      <Options
        updateFeedbacks={updateFeedbacks}
        totalFeedback={totalFeedback}
        resetFeedbacks={resetFeedbacks}
      />

      {totalFeedback > 0 ? (
        <Feedback feetbacks={feetbacks} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
