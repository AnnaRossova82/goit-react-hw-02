function Feedback({ feedbackCounts, totalFeedback, positivePercentage }) {
  return (
    <div>
      <p>Good: {feedbackCounts.good}</p>
      <p>Neutral: {feedbackCounts.neutral}</p>
      <p>Bad: {feedbackCounts.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}

export default Feedback;