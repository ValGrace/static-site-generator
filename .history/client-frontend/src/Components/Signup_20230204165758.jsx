import { useState, useRef} from 'react'
// import { ID } from '../Utils/appwrite'
import { useNavigate } from 'react-router-dom'
import { userAuth } from '../Context/UserContext'
import { v4 as uuidv4} from 'uuid'
import "./Inputs.css"
const Signup = () => {
    const accountEmail = useRef()
    const accountPass = useRef()
    const userName = useRef()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const { signup} = userAuth()
    const navigate = useNavigate()
    const signupSession = async (e) => {
       e.preventDefault()
       
        try {
            setError('')
            setLoading(true)
            await signup(uuidv4(), userName.current.value, accountEmail.current.value, accountPass.current.value)
            navigate('/home')
        }
        catch {
            setError('Failed to create an account')
           
        }
        setLoading(false)
    }
    return (
        <form onSubmit={signupSession} className="signupForm" method="POST">
        <h4>{error}</h4>
        <input type='text' placeholder='your name' ref={userName} required/>    
        <input type='email' placeholder='email address' ref={accountEmail} required/>
        <input type='password' placeholder='password' ref={accountPass} required/>
        <button disabled={loading} type='submit' id='sign'>Signup</button>
    </form>
    )
}

export default Signup