import classes from './contact-form.module.css';
import { useState, useEffect } from 'react';
import Notification from "../layout/ui/notification";

const ContactForm = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState(); // pending, success , error
  const [requestError, setRequestError] = useState(); // pending, success , error

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer)
    }
  }, [requestStatus]);

  const sendContactHandler = async (contactDetails) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactDetails),
    })

    const data = await response.json();

    if (!response.ok) {
      setRequestError(data.message);
      throw new Error(data.message || 'Something went wrong');
    }
    return data;
  }

  const sendMessageHandler = async (event) => {
    event.preventDefault();

    setRequestStatus('pending');
    try {
      await sendContactHandler({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus('success');

      setEnteredName('');
      setEnteredEmail('');
      setEnteredMessage('');

    } catch (error) {
      setRequestStatus('error');
    }
  }

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!'
    }
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent!'
    }
  }
  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError || 'Message not sent!'
    }
  }

  return <section className={classes.contact}>
    <h1>How i can help you?</h1>
    <form className={classes.form} onSubmit={sendMessageHandler}>
      <div className={classes.controls}>

        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email'
            id='email'
            value={enteredEmail}
            onChange={(event) => setEnteredEmail(event.target.value)}
            required />
        </div>

        <div className={classes.control}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name'
            value={enteredName}
            onChange={(event) => setEnteredName(event.target.value)}
            required />
        </div>
      </div>

      <div className={classes.control}>
        <label htmlFor='message'>Your Message</label>
        <textarea rows='5'
          id='message'
          value={enteredMessage}
          onChange={(event) => setEnteredMessage(event.target.value)}
          required />
      </div>

      <div className={classes.actions}>
        <button type='submit'>Send Message</button>
      </div>
    </form>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
  </section>;
}

export default ContactForm;