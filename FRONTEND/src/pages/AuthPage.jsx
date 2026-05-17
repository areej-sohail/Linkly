import { useState } from 'react'
import LoginForm from '../components/loginForm'
import RegisterForm from '../components/registerForm'

const AuthPage = () => {
    const [login, setLogin] = useState(false)
    return (
        <div>
          {login? <LoginForm state = {setLogin}/> : <RegisterForm state = {setLogin}/>}  
        </div>
    )
}

export default AuthPage
