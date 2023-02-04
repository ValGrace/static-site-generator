import { useState, useRef} from 'react'
import { account } from '../Utils/appwrite'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid} from 'uuid'
import "./Inputs.css"
const Signup = () => {
    const accountEmail = useRef()
    const accountPass = useRef()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const signupSession = () => {
        
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