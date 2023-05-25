import { useRef, useState } from 'react'


function HomePage() {

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  const [feedbackItems, setFeedbackItems] = useState([])

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    const bodyReq = {
      email: enteredEmail,
      text: enteredFeedback
    }
    fetch('/api/feedback', {
      method: 'post',
      body: JSON.stringify(bodyReq),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => console.log(data))
  }

  const loadFeedbackDataHandler = () => {
    fetch('/api/feedback',)
      .then(response => response.json())
      .then(data => setFeedbackItems(data.feedbacks))
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor='email'>Your Email Address</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor=' feedback'>Your Feedback</label>
          <textarea id=' feedback' rows='5' ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />

      <button onClick={loadFeedbackDataHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map(feedback => <li id={feedback.id}> {feedback.feedback}</li>)}
      </ul>
    </div>
  )
}

export default HomePage;
