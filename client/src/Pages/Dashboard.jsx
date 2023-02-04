import React, {useReducer} from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
const initialState = {page : <Login />} 

function reducer(state, action) {
    switch (action.type) {
        case 'loginpage':
            return {page: <Login />}
        case 'signuppage':
            return {page: <Signup />}  
        default:
            return initialState  
    }
} 
const DashBoard = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
        <h2>Static Site generator</h2>
        <div>
           <p>
            <span>Welcome to</span>
            <span>Static Site</span>
            <span>generator</span>
           </p>
           <div>
             <div>
             <button onClick={() => dispatch({type: 'loginpage'})}>Login</button>
             <button onClick={() => dispatch({type: 'signuppage'})}>Signup</button>
             </div>
             <div>{state.page}</div>
             <button>Login with github account</button>
             <button>Login with google account</button>
             
           </div>
        </div>

        </>
    )
}

export default DashBoard