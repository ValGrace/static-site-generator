import React, {useContext, useState} from "react";

// import { auth} from '../utils/Firebase'
import {account } from '../utils/Appwrite'
const AuthContext = React.createContext()    
export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    const [currentUser, setUser] = useState()
    const [loading, setLoading] = useState(true)
    function signup(unique, email, password){
        return account.create(unique, email, password)
    }
    function login(email, password) {
       account.createEmailSession(email, password).then(user=> {
            setUser(user)
            setLoading(false)
        }, err => {
            console.log(err)
        })
       
    }
    
    // useEffect(()=>{
    //     const authsubscribe = account.get(user => {
    //         setUser(user)
    //         setLoading(false)
    //     })
    //     const subscription = authsubscribe.subscribe()
    //     return () => {
    //         subscription.unsubscribe()
    //     }
    // }, [])

    const userValues = {
        currentUser,
        signup,
        login
    }

    return (
        <div>
            <AuthContext.Provider value={userValues}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    )
}