const Feedback = ({ feetbacks, totalFeedback }) => {
  return (
    <ul>
      <li>Good: {feetbacks.good}</li>
      <li>Neutral:{feetbacks.neutral}</li>
      <li>Bad:{feetbacks.bad}</li>
      <li>Total:{totalFeedback}</li>
      <li>
        Positive:{" "}
        {Math.round(
          ((feetbacks.good + feetbacks.neutral) / totalFeedback) * 100
        )}
        %
      </li>
    </ul>
  );
};

export default Feedback;
