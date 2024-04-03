import { useState, useEffect } from 'react';
import Description from './Description/Decsription';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';

function App() {

  const getStoredFeedbackCounts = () => {
    const storedCounts = localStorage.getItem('feedbackCounts');
    return storedCounts ? JSON.parse(storedCounts) : { good: 0, neutral: 0, bad: 0 };
  };
  const [feedbackCounts, setFeedbackCounts] = useState(getStoredFeedbackCounts);

  const totalFeedback = feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;

  const positivePercentage = Math.round((feedbackCounts.good / totalFeedback) * 100) || 0;


  useEffect(() => {
    localStorage.setItem('feedbackCounts', JSON.stringify(feedbackCounts));
  }, [feedbackCounts]);

 
  const handleFeedback = (type) => {
    switch (type) {
      case 'good':
        setFeedbackCounts(prevCounts => ({ ...prevCounts, good: prevCounts.good + 1 }));
        break;
      case 'neutral':
        setFeedbackCounts(prevCounts => ({ ...prevCounts, neutral: prevCounts.neutral + 1 }));
        break;
      case 'bad':
        setFeedbackCounts(prevCounts => ({ ...prevCounts, bad: prevCounts.bad + 1 }));
        break;
      case 'reset':
        setFeedbackCounts({ good: 0, neutral: 0, bad: 0 });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Description />
      <Options handleFeedback={handleFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackCounts={feedbackCounts}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification text="No feedback yet" />
      )}
    </div>
  );
}

export default App;