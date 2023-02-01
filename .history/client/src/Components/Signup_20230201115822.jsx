import React, {useRef} from 'react'

const Signup = () => {
    const emailRef = useRef()
    const passRef = useRef()

    const signupForm = (e) => {
        e.preventDefault() 
    }
    return (
        <form onSubmit={signupForm} >
          <input type='email' placeholder='email address' ref={emailRef}/>
          <input type='password' placeholder='password' ref={passRef} />
          <button>Signup</button>
        </form>
    )
}

export default Signup