import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'

import './authentication.style.scss'

export default function Authentication() {

  return (

      <div className='auth-container'>
      <SignInForm />
      <SignUpForm />
      </div>

  )
}
