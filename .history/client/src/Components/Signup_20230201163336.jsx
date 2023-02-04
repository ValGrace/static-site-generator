import React, {useRef, useState} from 'react'
import { useAuth } from '../Context/AuthContext'
const Signup = () => {
    const emailRef = useRef()
    const passRef = useRef()
    const [error, setError] = useState()
    const { signup} = useAuth()
    const signupForm = async (e) => {
        e.preventDefault() 
        try {
            setError("")
            await signup(emailRef.current.value, passRef.current.value)
           
        }
        catch {
            setError("Failed to create an account")
        }
        
    }
    return (
        <>
        {error && <p>{error}</p>}
        <form onSubmit={signupForm} >
          <input type='email' placeholder='email address' ref={emailRef}/>
          <input type='password' placeholder='password' ref={passRef} />
          <button>Signup</button>
        </form>
       
       </>
    )
}

export default Signup