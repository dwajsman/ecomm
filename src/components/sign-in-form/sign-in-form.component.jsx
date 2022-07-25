import React, { useState } from 'react'
import './sign-in-form.styles.scss'


import { 
  authWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocFromAuth
} from '../../utils/firebase/firebase'

import Button from '../button/button.component';
import FormInput from '../form-input/form-input-component';

const formFieldsModel = {
  email: '',
  password: ''
}


export default function SignInForm() {

  const [formFields, setFomFields] = useState(formFieldsModel);
  const { email, password } = formFields;


  const resetForm = () => {
    setFomFields(formFieldsModel);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFomFields({...formFields, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {user} = await authWithEmailAndPassword(email, password);
      console.log("1st response >> ",user);
      resetForm();
    } catch (e) {
      switch (e.code) {
        case 'auth/wrong-password':
          alert("Wrong password. Please try again.")
          break;
        case 'auth/user-not-found':
          alert("No user associated with this email")
          break;
        default:
          console.log("user log-in error", e);
          break;
      }
      
    }


  }


  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(res.user);
  }

  return (
    <div className='sign-in-container'>
      <h2>Sign in</h2>
      <span>Enter account info</span>

      <form onSubmit={handleSubmit}>

        <FormInput 
          label="Email"
          type="email" 
          required
          name='email'
          onChange={handleChange} 
          value={email}
        />

        <FormInput 
          label="Password"
          type="password" 
          required
          name='password'
          onChange={handleChange} 
          value={password} 
        />
        <div className='buttons-container'>
          <Button type="submit" children="Sign In" />
          <Button buttonType='google' onClick={logGoogleUser} children="Google Login" />
        </div>

      </form>
    </div>
  )
}
