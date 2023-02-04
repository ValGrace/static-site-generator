import React, { useReducer} from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

const initialState = {page : <Login />}
function reducer(state, action) {
    switch(action.type) {
        case 'loginpage':
          return { page: <Login />} 
        case 'signuppage':
            return { page: <Signup />}
        default:
            return { page: <h2>Loading....</h2>}      
    }
} 
const Dashboard = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
         <h2>Static Site Generator</h2>
         <div>Static site Image</div>
         <div className='dash' id='dash'>
            <div className='toggleForms'>
                <button onClick={() => dispatch({type: 'loginpage'})} className="type-btn">Login</button>
                <button onClick={() => dispatch({type: 'signuppage'}) 
                } className="type-btn">Signup</button>
            <React.Fragment>{state.page}</React.Fragment>
            </div>            
            <button id="auth-btns">Login with Github account</button>
            <button id="auth-btns">Login with Google account</button>
         </div>
       </>
    )
}

export default Dashboard