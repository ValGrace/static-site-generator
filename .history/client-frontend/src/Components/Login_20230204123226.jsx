import { useRef, useState } from 'react'
import "./Inputs.css"
const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [loading, setLoading] = useState(true)
    const LoginSession = () => {

    }
    return (
    <form onSubmit={LoginSession} className="signupForm">
        <input type='email' placeholder='email address' ref={emailRef} />
        <input type='password' placeholder='password' ref={passwordRef} />
        <button disabled={loading} type='submit' id='sign'>Login</button>
    </form>
    )
}

export default Login