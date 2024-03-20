import css from "./Options.module.css";

const Options = ({ updateFeedbacks, totalFeedback, resetFeedbacks }) => {
  return (
    <div className={css.wrapperButton}>
      <button onClick={() => updateFeedbacks("good")} type="button">
        Good
      </button>

      <button onClick={() => updateFeedbacks("neutral")} type="button">
        Neutral
      </button>

      <button onClick={() => updateFeedbacks("bad")} type="button">
        Bad
      </button>

      {totalFeedback > 0 && (
        <button onClick={resetFeedbacks} type="button">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
