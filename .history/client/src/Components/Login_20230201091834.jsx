import React, {useState} from 'react'

const Login = () => {
    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')

    const userLogin = (event) => {
        event.preventDefault()

    }
    return (
        <>
        <form onSubmit={userLogin} action='submit'>
             <input type='email' placeholder='email address' name='email' value={userEmail} onChange={e => setUserEmail(e.target.value)} />
             <input type='password' placeholder='password' name='pass' value={userPass} onChange={e => setUserPass(e.target.value)} />
             </form>
        </>
    )
}

export default Login