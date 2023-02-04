import { useRef, useState } from 'react'
import { account } from '../Utils/appwrite'
import { useNavigate } from 'react-router-dom'
import "./Inputs.css"
const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const LoginSession = async (event) => {
       event.preventDefault() 
       try {
        await account.createEmailSession(emailRef.current.value, passwordRef.current.value) 
          navigate("/home")
          setLoading(true)
                 }
       catch (error) {
          console.log(error)
       }  
       setLoading(false)  
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