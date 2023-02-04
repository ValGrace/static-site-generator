import { useReducer} from 'react'
import Login from '../Components/Login'
import Signup from '../../../client/src/Components/Signup'

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
         <div>
            <div className='toggleForms'>
                <button onClick={() => dispatch({type: 'loginpage'})}>Login</button>
                <button onClick={() => dispatch({type: 'siguppage'})
                }>Signup</button>
            <div>{state.page}</div>
            </div>            
            
         </div>
       </>
    )
}

export default Dashboard