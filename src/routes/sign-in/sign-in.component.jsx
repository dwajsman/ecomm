import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'

import { 
  auth,
  signInWithGoogleRedirect,
  signInWithGooglePopup,
  createUserDocFromAuth
} from '../../utils/firebase/firebase'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

export default function SignIn() {

  useEffect( () => {
    async function f() {
      const res = await getRedirectResult(auth);
      // console.log("getRedirectResult >>> ",res);
      if (res) {
        const userDocRef = await createUserDocFromAuth(res.user);

      }
  };
    f();
  },[])

  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(res.user);
  }

  // const logGoogleUserRedirect = async () => {
  //   const res = await signInWithGoogleRedirect();
  //   // const userDocRef = await createUserDocFromAuth(res.user);
  //   console.log('bloop',res.user);
  // }

  return (
    <div>
      <h1>sign-in page</h1>
      <button onClick={logGoogleUser}>
        Login with Google Pop up
      </button>      
      <button onClick={signInWithGoogleRedirect}>
        Login with Google Redirect
      </button>
      <SignUpForm />
    </div>
  )
}
