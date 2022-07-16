import React from 'react'
import { 
  signInWithGooglePopup,
  signInWithGoogleRedirect, 
  createUserDocFromAuth 
} from '../../utils/firebase/firebase'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

export default function SignIn() {

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
      <SignUpForm />
    </div>
  )
}
