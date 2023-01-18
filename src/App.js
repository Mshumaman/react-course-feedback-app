import { useState } from 'react';
import Header from './components/Header';
import FeedBackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className='Container'></div>
      <FeedbackStats feedback={feedback} />
      <FeedbackForm />
      <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  );
}
export default App;
