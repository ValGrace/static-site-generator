import { useState, useRef} from 'react'
import "./Inputs.css"
const Signup = () => {
    const accountEmail = useRef()
    const accountPass = useRef()
    const [loading, setLoading] = useState(true)
    const signupSession = () => {
        
    }
    return (
        <form onSubmit={signupSession} className="signupForm">
        <input type='email' placeholder='email address' ref={accountEmail} />
        <input type='password' placeholder='password' ref={accountPass} />
        <button disabled={loading} type='submit' id='sign'>Signup</button>
    </form>
    )
}

export default Signup