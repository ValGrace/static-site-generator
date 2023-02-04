import React, {useRef, useState} from 'react'
import { ID } from 'appwrite'
import { useAuth } from '../Context/AuthContext'
import { useNavigate} from 'react-router-dom'
const Signup = () => {
    const emailRef = useRef()
    const passRef = useRef()
    const [error, setError] = useState()
    const { signup} = useAuth()
    const navigate = useNavigate()
    const signupForm = async (e) => {
        e.preventDefault() 
        try {
            setError("")
            await signup(ID.unique(), emailRef.current.value, passRef.current.value)
           navigate("/homepage")
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