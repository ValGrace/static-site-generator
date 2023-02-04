import {useState,  useContext} from 'react'
import { account } from '../Utils/appwrite'
const UserContext = React.createContext()

export function userAuth() {
   return useContext(UserContext)
} 

export default function AuthProvider({children}) {
    const [loading, setLoading] = useState(true)

    function signup(id, email, password) {
        const promise = account.create(id, email, password)

        promise.then(
            function(response){
                console.log(response)
            },
            function(error) {
               console.log(error)
            }
        )
    }

    function login(email, password) {

    }

    const value = {
        signup,
        login
    }

    return (
        <div>
            <UserContext.Provider value={value}>
                {!loading && children}
            </UserContext.Provider>
        </div>
    )
}
