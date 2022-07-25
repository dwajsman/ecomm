import React, { useState } from 'react'
import '../sign-up-form/sign-up-form.styles.scss'

import { 
  createAuthWithEmailAndPassword,
  createUserDocFromAuth
} from '../../utils/firebase/firebase'

import Button from '../button/button.component';

import FormInput from '../form-input/form-input-component';


const formFieldsModel = {
  displayName: '',
  email: '',
  password: '',
  passwordConfirm: ''
}


export default function SignUpForm() {

  const [formFields, setFormFields] = useState(formFieldsModel);
  const { displayName, email, password, passwordConfirm } = formFields;

  // console.log(formFields)

  const resetForm = () => {
    setFormFields(formFieldsModel);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== passwordConfirm){
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await createAuthWithEmailAndPassword(
        email,
        password
      );
      console.log("1st response >> ",user, {displayName});

      await createUserDocFromAuth(user, {displayName})
      resetForm()
    } catch (error) {
      console.log(
        "user creation error", error
      )
    }
   
  }

  return (    
    <div className='sign-up-container'>
      <h2>Dont have an account?</h2>
      <span>Sign up with Email and Password</span>
      <form onSubmit={handleSubmit} >

        <FormInput 
          label="Display Name"
          type="text" 
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />


        {/* <label>Display Name</label>
        <input 
          type="text" 
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        /> */}

        {/* <label>Email</label> */}
        <FormInput 
          label="Email"
          type="email" 
          required
          name='email'
          onChange={handleChange} 
          value={email}
        />

        {/* <label>Password</label> */}
        <FormInput 
          label="Password"
          type="password" 
          required
          name='password'
          onChange={handleChange} 
          value={password} 
        />

        {/* <label>Confirm Password</label> */}
        <FormInput 
          label="Confirm Password"
          type="password" 
          required
          name='passwordConfirm'
          onChange={handleChange} 
          value={passwordConfirm}
        />

        {/* <button type='submit'>Sign Up</button>  */}
        <Button children="Sign Up" />
      </form>
    </div>
  )
}
