import React, { useState } from 'react'

import { 
  createAuthWithEmailAndPassword,
  createUserDocFromAuth
} from '../../utils/firebase/firebase'

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

  console.log(formFields)

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
      const response = await createAuthWithEmailAndPassword(
        email,
        password,
        displayName
      );
      await createUserDocFromAuth(response, {displayName})
      resetForm()
    } catch (error) {
      console.log(
        "user creation error", error
      )
    }
   
  }

  return (    
    <div>
      <h1>Sign up with Email and Password</h1>
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

        <button type='submit'>Sign Up</button> 

      </form>
    </div>
  )
}
