import { useRef, useState } from 'react'
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const [isInvalid, setIsInvalid] = useState(false);
  const emailRef = useRef();
  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value

    if (!enteredEmail || enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
      setIsInvalid(true);
      return;
    }


    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API

    fetch('/api/newsletter', {
      method: 'post',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => console.log(data))

  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailRef}
          />
          {isInvalid && <p>Please enter a valid email address!</p>}
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
