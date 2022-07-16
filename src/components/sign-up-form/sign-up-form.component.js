import React, { useState } from 'react'

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


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value })
  }

  return (    
    <div>
      <h1>Sign up with Email and Password</h1>
      <form onSubmit={ () => {} }>
        <label>Display Name</label>
        <input 
          type="text" 
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <label>Email</label>
        <input 
          type="email" 
          required
          name='email'
          onChange={handleChange} 
          value={email}
        />

        <label>Password</label>
        <input 
          type="password" 
          required
          name='password'
          onChange={handleChange} 
          value={password} 
        />

        <label>Confirm Password</label>
        <input 
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
