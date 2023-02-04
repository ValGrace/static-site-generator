import { useState, useRef} from 'react'
const Signup = () => {
    const accountEmail = useRef()
    const accountPass = useRef()
    const signupSession = () => {
        
    }
    return (
        <form onSubmit={signupSession}>
        <input type='email' placeholder='email address' ref={accountEmail} />
        <input type='password' placeholder='password' ref={accountPass} />
        <button disabled={loading} type='submit'>Signup</button>
    </form>
    )
}