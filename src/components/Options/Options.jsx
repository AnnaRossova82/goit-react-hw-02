import css from "./Options.module.css"



function Options({ handleFeedback, totalFeedback }) {
  return (
    <div>
      <button className={css.button} onClick={() => handleFeedback('good')}>Good</button>
      <button className={css.button} onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button className={css.button} onClick={() => handleFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && <button className={css.button} onClick={() => handleFeedback('reset')}>Reset</button>}
    </div>
  );
}

export default Options;