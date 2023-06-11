import { useState, useRef } from 'react';
import classes from './auth-form.module.css';
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();

  const router = useRouter();
  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }
  const createUser = async (email, password) => {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email, password
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
    return data;
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // add vallidation
    // if (!email || !email.includes("@") || !password || !password.trim().length < 7) {
    //   throw new Error("You must provide email and password and password should also be at 7 characters long.");// render a modal
    // }

    if (isLogin) {
      // setIsLogin(false);
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password
      })
      console.log('result',result);
      if(!result.error){
        // set auth state.
        router.replace('/profile');
      }
    }
    else {
      try {
        const createdUser = await createUser(email, password);
        console.log(createdUser);
      } catch (error) {
        console.log((error.message));
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={passwordRef} required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
