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
    return (
        <>

        </>
    )
}

export default Dashboard