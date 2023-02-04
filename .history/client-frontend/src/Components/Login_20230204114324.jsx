import { useRef } from 'react'
const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const LoginSession = () => {

    }
    return (
    <form onSubmit={LoginSession}>
        <input type='email' placeholder="email address" ref={emailRef} />
        <input type="password" placeholder="password" ref={passwordRef} />
        <button>Login</button>
    </form>
    )
}

export default Login