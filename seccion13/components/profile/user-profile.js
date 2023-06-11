// import { useState, useEffect } from 'react';
import ProfileForm from './profile-form';
import classes from './user-profile.module.css';
// import { useSession, getSession } from 'next-auth/client';
function UserProfile() {
  // const [user, setUser] = useState(null);

  // const [session, loading] = useSession();
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getSession().then(
  //     session => {
  //       if (!session) {
  //         window.location.href = '/auth'
  //       }
  //       else {
  //         setIsLoading(false);
  //       }
  //       // setLoadedSession(session);
  //     }
  //   )
  // })

  // if (isLoading) {
  //   return <p className={classes.profile}>Loading..</p>
  // }

  const changePasswordHandler = async(passwordData) => {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePAssword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
