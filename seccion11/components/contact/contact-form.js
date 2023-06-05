import classes from './contact-form.module.css';
import { useState } from 'react';

const ContactForm = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const sendMessageHandler = async (event) => {
    event.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
    })
    // props.sendMessage()
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
  </section>;
}

export default ContactForm;