import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const feedbackValues = { good: 0, neutral: 0, bad: 0 };
const LS_KEY = "feedback";

function App() {
  const [feetbacks, setFeetbacks] = useState(() => {
    const stringifiedFeedback = localStorage.getItem(LS_KEY);
    const parsedFeedback = JSON.parse(stringifiedFeedback) ?? feedbackValues;
    return parsedFeedback;
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

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(feetbacks));
  }, [feetbacks]);

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
