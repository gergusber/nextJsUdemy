import AuthForm from '../components/auth/auth-form';
import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

function AuthPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  
  useEffect(async () => {
    const session = await getSession();
    if (session) {
      router.replace('/');
    }
    else {
      setIsLoading(false)
    }
  }, [router])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return <AuthForm />;
}

export default AuthPage;
