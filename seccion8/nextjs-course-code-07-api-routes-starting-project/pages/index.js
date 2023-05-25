import { useRef } from 'react'


function HomePage() {

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();


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
    }).then( response => response.json())
      .then(data => console.log(data))
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
    </div>
  )
}

export default HomePage;
