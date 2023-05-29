import { useRef, useState, useContext } from 'react'
import classes from './newsletter-registration.module.css';
import NotificationContext from '../../store/notification-context'



function NewsletterRegistration() {

  const context = useContext(NotificationContext);

  const [isInvalid, setIsInvalid] = useState(false);
  const emailRef = useRef();
  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value

    if (!enteredEmail || enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
      setIsInvalid(true);
      return;
    }

    context.showNotification({
      title: 'signing up..',
      message: 'Registering to Newsletter',
      status: 'pending'
    })

    fetch('/api/newsletter', {
      method: 'post',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        response.json()
      }
      else {
        response.json().then(data=> {
          context.showNotification({
            title: 'signing up failed..',
            message: data.message || 'Registering to Newsletter failed',
            status: 'error'
          })
        })
      }
    }).then(data => {
        console.log(data);
        context.showNotification({
          title: 'Success!',
          message: 'Registering to Newsletter correct',
          status: 'success'
        })
      })
      .catch(err => {
        context.showNotification({
          title: 'signing up failed..',
          message: err.message || 'Registering to Newsletter failed',
          status: 'error'
        })
      })
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
