import { useState, useRef} from 'react'
import { ID } from '../Utils/appwrite'
import { useNavigate } from 'react-router-dom'
import { userAuth } from '../Context/UserContext'
import "./Inputs.css"
const Signup = () => {
    const accountEmail = useRef()
    const accountPass = useRef()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const { signup} = userAuth()
    const navigate = useNavigate()
    const signupSession = async (e) => {
       e.preventDefault()
        if (accountEmail.current.value === "" || accountPass.current.value === "") {
            return setError('Please provide email and password')
        }
        try {
            setError('')
            setLoading(true)
            await signup(ID.unique(), accountEmail.current.value, accountPass.current.value)
            navigate('/home')
        }
        catch {
            setError('Failed to create an account')
           
        }
        setLoading(false)
    }
    return (
        <form onSubmit={signupSession} className="signupForm" method="POST">
        <input type='email' placeholder='email address' ref={accountEmail} />
        <input type='password' placeholder='password' ref={accountPass} />
        <button disabled={loading} type='submit' id='sign'>Signup</button>
    </form>
    )
}

export default Signup